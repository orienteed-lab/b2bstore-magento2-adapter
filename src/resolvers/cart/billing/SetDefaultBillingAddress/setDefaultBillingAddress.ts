import { ClientProps } from 'src';
import { SetDefaultBillingAddressMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setDefaultBillingAddress.gql'

const SetDefaultBillingAddress = (clientProps: ClientProps) => (resolverProps: SetDefaultBillingAddressMutationVariables) => {
    const { mergeOperations, useMutation, backendEdition } = clientProps;

    const { setDefaultBillingAddressMutationCE, setDefaultBillingAddressMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const setDefaultBillingAddressMutation = backendEdition === 'EE' ? setDefaultBillingAddressMutationEE : setDefaultBillingAddressMutationCE;

    const [
        updateDefaultBillingAddress,
        {
            error,
            called,
            loading
        }
    ] = useMutation(setDefaultBillingAddressMutation);

    return { updateDefaultBillingAddress, loading, error, called };
};

export default SetDefaultBillingAddress;
