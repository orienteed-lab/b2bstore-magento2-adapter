import { ClientProps } from 'src';
import { CreateAccountMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './createAccount.gql';

const CreateAccount = (clientProps: ClientProps) => (resolverProps: CreateAccountMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;
    
    const { createAccountMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [createAccount, { error }] = useMutation(createAccountMutation, {
        fetchPolicy: 'no-cache'
    });

    return { createAccount, error };
};

export default CreateAccount;
