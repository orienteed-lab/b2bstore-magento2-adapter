import { ClientProps } from 'src';
import { SetCustomerAddressIdOnCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setCustomerAddressIdOnCart.gql';

interface SetCustomerAddressIdOnCartProps extends SetCustomerAddressIdOnCartMutationVariables {
    onSuccess?: any,
    hasOnSuccess: boolean
}

const SetCustomerAddressIdOnCart = (clientProps: ClientProps) => (resolverProps: SetCustomerAddressIdOnCartProps) => {
    const { backendEdition, mergeOperations, useMutation } = clientProps;
    const { hasOnSuccess } = resolverProps;

    const { setCustomerAddressIdOnCartMutationCE, setCustomerAddressIdOnCartMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const setCustomerAddressIdOnCartMutation = backendEdition === 'EE' ? setCustomerAddressIdOnCartMutationEE : setCustomerAddressIdOnCartMutationCE;

    if (hasOnSuccess) {
        const { onSuccess } = resolverProps;
        const [
            setCustomerAddressOnCart,
            { error, loading }
        ] = useMutation(setCustomerAddressIdOnCartMutation, {
            onCompleted: () => {
                onSuccess();
            }
        });

        return {setCustomerAddressOnCart, error, loading }
    } else {
        const [setDefaultAddressOnCart, { loading }] = useMutation(
            setCustomerAddressIdOnCartMutation
        );

        return {setDefaultAddressOnCart, loading}
    }

};

export default SetCustomerAddressIdOnCart;
