import { ClientProps } from 'src';
import { ApplyGiftCardToCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './applyGiftCardToCart.gql';

const ApplyGiftCardToCart = (clientProps: ClientProps) => (resolverProps: ApplyGiftCardToCartMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { applyGiftCardToCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [applyCard, applyCardResult] = useMutation(applyGiftCardToCartMutation);

    return { applyCard, applyCardResult };
};

export default ApplyGiftCardToCart;
