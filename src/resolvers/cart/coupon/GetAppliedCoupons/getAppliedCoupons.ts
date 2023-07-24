import { ClientProps } from 'src';
import { GetAppliedCouponsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getAppliedCoupons.gql';

const GetAppliedCoupons = (clientProps: ClientProps) => (resolverProps: GetAppliedCouponsQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getAppliedCouponsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, error } = useQuery(getAppliedCouponsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !cartId,
        variables: {
            cartId
        }
    });

    return { data, error };
};

export default GetAppliedCoupons;
