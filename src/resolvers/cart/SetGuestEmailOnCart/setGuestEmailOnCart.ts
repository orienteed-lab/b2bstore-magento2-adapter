import { ClientProps } from 'src';
import { SetGuestEmailOnCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setGuestEmailOnCart.gql';

const SetGuestEmailOnCart = (clientProps: ClientProps) => (resolverProps: SetGuestEmailOnCartMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { setGuestEmailOnCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [setGuestEmail] = useMutation(setGuestEmailOnCartMutation, {
        // For security, never cache this mutation or the mutation results.
        fetchPolicy: 'no-cache'
    });

    return { setGuestEmail };
};

export default SetGuestEmailOnCart;
