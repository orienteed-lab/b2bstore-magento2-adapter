import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './subscribeToNewsletter.gql';

interface SubscribeToNewsletterProps {
    setNewsLetterError?: any
}

const SubscribeToNewsletter = (clientProps: ClientProps) => (resolverProps: SubscribeToNewsletterProps) => {
    const { mergeOperations, useMutation } = clientProps;
    const { setNewsLetterError } = resolverProps;

    const { subscribeToNewsletterMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [subscribeNewsLetter, { data, loading }] = useMutation(subscribeToNewsletterMutation, {
        fetchPolicy: 'no-cache',
        onError: setNewsLetterError
    });

    return { subscribeNewsLetter, data, loading };
};

export default SubscribeToNewsletter;
