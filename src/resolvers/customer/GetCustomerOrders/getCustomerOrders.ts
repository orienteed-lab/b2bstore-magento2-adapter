import { ClientProps } from 'src';
import { GetCustomerOrdersQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCustomerOrders.gql';

const GetCustomerOrders = (clientProps: ClientProps) => (resolverProps: GetCustomerOrdersQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { pageSize, filter } = resolverProps;

    const { getCustomerOrdersQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, error, loading } = useQuery(getCustomerOrdersQuery, {
        fetchPolicy: 'cache-and-network',
        variables: {
            filter,
            pageSize
        }
    });

    return { data, loading, error };
};

export default GetCustomerOrders;
