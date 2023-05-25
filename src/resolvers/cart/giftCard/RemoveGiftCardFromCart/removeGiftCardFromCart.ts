import { ClientProps } from 'src';
import { RemoveGiftCardFromCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './removeGiftCardFromCart.gql';

const RemoveGiftCardFromCart = (clientProps: ClientProps) => (resolverProps: RemoveGiftCardFromCartMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { removeGiftCardFromCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [removeCard, removeCardResult] = useMutation(removeGiftCardFromCartMutation);

    return { removeCard, removeCardResult };
};

export default RemoveGiftCardFromCart;
