import { ClientProps } from 'src';
import { ChangeCustomerPasswordMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './changeCustomerPassword.gql';

const ChangeCustomerPassword = (clientProps: ClientProps) => (resolverProps: ChangeCustomerPasswordMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { changeCustomerPasswordMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [changeCustomerPassword, { error, loading }] = useMutation(changeCustomerPasswordMutation);

    return { changeCustomerPassword, loading, error };
};

export default ChangeCustomerPassword;
