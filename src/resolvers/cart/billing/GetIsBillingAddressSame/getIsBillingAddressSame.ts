import { ClientProps } from 'src';
import { GetIsBillingAddressSameQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getIsBillingAddressSame.gql'

const GetIsBillingAddressSame = (clientProps: ClientProps) => (resolverProps: GetIsBillingAddressSameQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getIsBillingAddressSameQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data } = useQuery(getIsBillingAddressSameQuery, {
        skip: !cartId,
        variables: { cartId }
    });

    return { data, getIsBillingAddressSameQuery };
};

export default GetIsBillingAddressSame;
