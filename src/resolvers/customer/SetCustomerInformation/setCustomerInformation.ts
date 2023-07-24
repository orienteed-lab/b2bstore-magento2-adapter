import { ClientProps } from 'src';
import { SetCustomerInformationMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setCustomerInformation.gql';

const SetCustomerInformation = (clientProps: ClientProps) => (resolverProps: SetCustomerInformationMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { setCustomerInformationMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [setCustomerInformation, { error, loading }] = useMutation(setCustomerInformationMutation);

    return { setCustomerInformation, loading, error };
};

export default SetCustomerInformation;
