import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCustomerSubscription.gql';

interface GetCustomerSubscriptionProps {
    isSignedIn?: boolean;
}

const GetCustomerSubscription = (clientProps: ClientProps) => (resolverProps: GetCustomerSubscriptionProps) => {
    const { mergeOperations, useQuery } = clientProps;
    const { isSignedIn } = resolverProps;

    const { getCustomerSubscriptionQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, error } = useQuery(getCustomerSubscriptionQuery, { skip: !isSignedIn });

    return { data, error };
};

export default GetCustomerSubscription;
