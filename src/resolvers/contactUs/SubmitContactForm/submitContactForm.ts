import { ClientProps } from 'src';
import { SubmitContactFormMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './submitContactForm.gql';

const SubmitContactForm = (clientProps: ClientProps) => (resolverProps: SubmitContactFormMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { submitContactFormMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [submitForm, { data, error, loading }] = useMutation(submitContactFormMutation, {
        fetchPolicy: 'no-cache'
    });

    return { submitForm, data, loading, error };
};

export default SubmitContactForm;
