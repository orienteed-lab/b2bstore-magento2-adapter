import { ClientProps } from 'src';
import { RequestPasswordResetEmailMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './requestPasswordResetEmail.gql';

const RequestPasswordResetEmail = (clientProps: ClientProps) => (resolverProps: RequestPasswordResetEmailMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { requestPasswordResetEmailMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [requestResetEmail, { error, loading }] = useMutation(requestPasswordResetEmailMutation);

    return { requestResetEmail, loading, error };
};

export default RequestPasswordResetEmail;
