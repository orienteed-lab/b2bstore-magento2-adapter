import { ClientProps } from 'src';
import { SetPaymentMethodOnCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setPaymentMethodOnCart.gql';

const SetPaymentMethodOnCart = (clientProps: ClientProps) => (resolverProps: SetPaymentMethodOnCartMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { setPaymentMethodOnCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [fetch, { error, called, loading }] = useMutation(setPaymentMethodOnCartMutation);

    return { fetch, called, loading, error };
};

export default SetPaymentMethodOnCart;
