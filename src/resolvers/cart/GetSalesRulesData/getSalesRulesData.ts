import { ClientProps } from 'src';
import { GetSalesRulesDataQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getSalesRulesData.gql'

const GetSalesRulesData = (clientProps: ClientProps) => (resolverProps: GetSalesRulesDataQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getSalesRulesDataQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { loading, data } = useQuery(getSalesRulesDataQuery, {
        variables: { cartId },
        skip: !cartId
    });

    return { data, loading };
};

export default GetSalesRulesData;
