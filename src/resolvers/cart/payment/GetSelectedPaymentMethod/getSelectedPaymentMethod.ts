import { ClientProps } from 'src';
import { GetSelectedPaymentMethodQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getSelectedPaymentMethod.gql';

const GetSelectedPaymentMethod = (clientProps: ClientProps) => (resolverProps: GetSelectedPaymentMethodQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getSelectedPaymentMethodQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getSelectedPaymentMethodQuery, {
        skip: !cartId,
        variables: { cartId }
    });


    return { data, loading };
};

export default GetSelectedPaymentMethod;
