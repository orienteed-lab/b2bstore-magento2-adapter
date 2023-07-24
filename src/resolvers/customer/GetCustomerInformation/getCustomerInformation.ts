import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCustomerInformation.gql';

interface GetCustomerInformationProps {
    isAwait?: boolean;
    hasSkip?: boolean;
    isSignedIn?: boolean;
    hasFetchPolicy?: boolean;
    hasNextFetchPolicy?: boolean;
}

const GetCustomerInformation =
    (clientProps: ClientProps) =>
    (resolverProps: GetCustomerInformationProps = { isAwait: false, hasSkip: false, hasFetchPolicy: false, hasNextFetchPolicy: false }) => {
        const { mergeOperations, useQuery, useAwaitQuery } = clientProps;
        const { isAwait, hasSkip, hasFetchPolicy, hasNextFetchPolicy } = resolverProps;

        const { getCustomerInformationQuery } = mergeOperations(DEFAULT_OPERATIONS);

        if (isAwait) {
            const fetchUserDetails = useAwaitQuery(getCustomerInformationQuery);

            return fetchUserDetails;
        }

        if (hasSkip) {
            const { isSignedIn } = resolverProps;
            if (hasNextFetchPolicy) {
                const { data, error, loading } = useQuery(getCustomerInformationQuery, {
                    skip: !isSignedIn,
                    fetchPolicy: 'cache-and-network',
                    nextFetchPolicy: 'cache-first'
                });

                return { data, error, loading };
            } else if (hasFetchPolicy) {
                const { data, error, loading } = useQuery(getCustomerInformationQuery, {
                    fetchPolicy: 'network-only',
                    skip: !isSignedIn
                });

                return { data, error, loading };
            } else {
                const { data, loading, error } = useQuery(getCustomerInformationQuery, {
                    skip: !isSignedIn
                });

                return { data, error, loading };
            }
        }

        const { data, loading, error } = useQuery(getCustomerInformationQuery);

        return { data, loading, error };
    };

export default GetCustomerInformation;
