import { ClientProps } from 'src';
import { UpdateConfigurableOptionsMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './updateConfigurableOptions.gql';

const UpdateConfigurableOptions = (clientProps: ClientProps) => (resolverProps: UpdateConfigurableOptionsMutationVariables) => {
    const { mergeOperations, backendEdition, useMutation } = clientProps;

    const { updateConfigurableOptionsMutationCE, updateConfigurableOptionsMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const updateConfigurableOptionsMutation =
        backendEdition === 'EE' ? updateConfigurableOptionsMutationEE : updateConfigurableOptionsMutationCE;

    const [updateConfigurableOptions, { called, error, loading }] = useMutation(updateConfigurableOptionsMutation);

    return { updateConfigurableOptions, called, error, loading };
};

export default UpdateConfigurableOptions;
