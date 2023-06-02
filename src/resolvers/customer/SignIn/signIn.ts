import { ClientProps } from 'src';
import { SignInMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './signIn.gql';

const SignIn = (clientProps: ClientProps) => (resolverProps: SignInMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { signInMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [signIn, { error }] = useMutation(signInMutation, {
        fetchPolicy: 'no-cache'
    });

    return { signIn, error };
};

export default SignIn;
