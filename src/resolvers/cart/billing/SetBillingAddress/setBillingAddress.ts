import { ClientProps } from 'src';
import { SetBillingAddressMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setBillingAddress.gql';

const SetBillingAddress = (clientProps: ClientProps) => (resolverProps: SetBillingAddressMutationVariables) => {
    const { mergeOperations, useMutation, backendEdition } = clientProps;

    const { setBillingAddressMutationCE, setBillingAddressMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const setBillingAddressMutation = backendEdition === 'EE' ? setBillingAddressMutationEE : setBillingAddressMutationCE;

    const [updateBillingAddress, { error, called, loading }] = useMutation(setBillingAddressMutation);

    return { updateBillingAddress, called, loading, error };
};

export default SetBillingAddress;
