import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './setGuestShipping.gql';

interface SetGuestShippingProps {
    onSuccess: any
}

const SetGuestShipping = (clientProps: ClientProps) => (resolverProps: SetGuestShippingProps) => {
    const { backendEdition, mergeOperations, useMutation } = clientProps;
    const { onSuccess } = resolverProps;

    const { setGuestShippingMutationCE, setGuestShippingMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const setGuestShippingMutation = backendEdition === 'EE' ? setGuestShippingMutationEE : setGuestShippingMutationCE;

    const [setGuestShipping, { error, loading }] = useMutation(setGuestShippingMutation, {
        onCompleted: () => {
            onSuccess();
        }
    });

    return { setGuestShipping, loading, error };
};

export default SetGuestShipping;
