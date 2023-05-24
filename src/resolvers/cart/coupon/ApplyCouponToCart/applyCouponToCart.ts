import { ClientProps } from 'src';
import { ApplyCouponToCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './applyCouponToCart.gql';

const ApplyCouponToCart = (clientProps: ClientProps) => (resolverProps: ApplyCouponToCartMutationVariables) => {
    const { backendEdition, mergeOperations, useMutation } = clientProps;

    const { applyCouponToCartMutationCE, applyCouponToCartMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const applyCouponToCartMutation = backendEdition === 'EE' ? applyCouponToCartMutationEE : applyCouponToCartMutationCE;

    const [applyCoupon, { called, error, loading }] = useMutation(applyCouponToCartMutation);

    return { applyCoupon, called, loading, error };
};

export default ApplyCouponToCart;
