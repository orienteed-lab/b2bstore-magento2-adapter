import { ClientProps } from 'src';
import { GetPaymentMethodsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getPaymentMethods.gql';

const GetPaymentMethods = (clientProps: ClientProps) => (resolverProps: GetPaymentMethodsQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getPaymentMethodsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getPaymentMethodsQuery, {
        skip: !cartId,
        variables: { cartId }
    });

    return { data, loading };
};

export default GetPaymentMethods;
