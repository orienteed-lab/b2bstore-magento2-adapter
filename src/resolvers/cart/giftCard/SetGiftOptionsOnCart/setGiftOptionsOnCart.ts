import { ClientProps } from 'src';
import { SetGiftOptionsOnCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setGiftOptionsOnCart.gql';

const SetGiftOptionsOnCart = (clientProps: ClientProps) => (resolverProps: SetGiftOptionsOnCartMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { setGiftOptionsOnCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [setGiftOptionsOnCart, { error }] = useMutation(setGiftOptionsOnCartMutation);

    return { setGiftOptionsOnCart, error };
};

export default SetGiftOptionsOnCart;
