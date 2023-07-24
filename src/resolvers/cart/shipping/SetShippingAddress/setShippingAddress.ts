import { ClientProps } from 'src';
import { SetShippingAddressMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setShippingAddress.gql';

const SetShippingAddress = (clientProps: ClientProps) => (resolverProps: SetShippingAddressMutationVariables) => {
    const { backendEdition, mergeOperations, useMutation } = clientProps;

    const { setShippingAddressMutationCE, setShippingAddressMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const setShippingAddressMutation = backendEdition === 'EE' ? setShippingAddressMutationEE : setShippingAddressMutationCE;

    const [
        setShippingAddress,
        { called, error, loading }
    ] = useMutation(setShippingAddressMutation);

    return { setShippingAddress, called, loading, error };
};

export default SetShippingAddress;
