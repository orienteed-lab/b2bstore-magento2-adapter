import { ClientProps } from 'src';
import { RemoveCouponFromCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './removeCouponFromCart.gql';

const RemoveCouponFromCart = (clientProps: ClientProps) => (resolverProps: RemoveCouponFromCartMutationVariables) => {
    const { backendEdition, mergeOperations, useMutation } = clientProps;

    const { removeCouponFromCartMutationCE, removeCouponFromCartMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const removeCouponFromCartMutation = backendEdition === 'EE' ? removeCouponFromCartMutationEE : removeCouponFromCartMutationCE;

    const [
        removeCoupon,
        { called, error, loading }
    ] = useMutation(removeCouponFromCartMutation);

    return { removeCoupon, called, loading, error };
};

export default RemoveCouponFromCart;
