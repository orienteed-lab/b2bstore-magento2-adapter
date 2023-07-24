import { ClientProps } from 'src';
import { SetNewsletterSubscriptionMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setNewsletterSubscription.gql';

const SetNewsletterSubscription = (clientProps: ClientProps) => (resolverProps: SetNewsletterSubscriptionMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { setNewsletterSubscriptionMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [setNewsletterSubscription, { error, loading }] = useMutation(
        setNewsletterSubscriptionMutation
    );

    return { setNewsletterSubscription, loading, error };
};

export default SetNewsletterSubscription;
