import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getSavedPayments.gql';

interface SavedPaymentsProps {
    isSignedIn: boolean
}

const GetSavedPayments = (clientProps: ClientProps) => (resolverProps: SavedPaymentsProps) => {
    const { mergeOperations, useQuery } = clientProps;
    const { isSignedIn } = resolverProps;

    const { getSavedPaymentsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getSavedPaymentsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !isSignedIn
    });

    return { data, loading };
};

export default GetSavedPayments;
