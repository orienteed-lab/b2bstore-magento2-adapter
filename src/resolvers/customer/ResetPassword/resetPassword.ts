import { ClientProps } from 'src';
import { ResetPasswordMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './resetPassword.gql';

const ResetPassword = (clientProps: ClientProps) => (resolverProps: ResetPasswordMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { resetPasswordMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [resetPassword, { error, loading }] = useMutation(resetPasswordMutation);

    return { resetPassword, loading, error };
};

export default ResetPassword;
