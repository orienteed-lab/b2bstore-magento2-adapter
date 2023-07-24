import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCustomerAddressesForAddressBook.gql';

interface GetCustomerAddressesForAddressBookProps {
    isSignedIn?: boolean;
    hasNextFetchPolicy?: boolean;
}

const GetCustomerAddressesForAddressBook =
    (clientProps: ClientProps) =>
    (resolverProps: GetCustomerAddressesForAddressBookProps = { hasNextFetchPolicy: false, isSignedIn: false }) => {
        const { mergeOperations, useQuery } = clientProps;
        const { hasNextFetchPolicy, isSignedIn } = resolverProps;

        const { getCustomerAddressesForAddressBookQuery } = mergeOperations(DEFAULT_OPERATIONS);

        if (hasNextFetchPolicy) {
            const { data, loading } = useQuery(getCustomerAddressesForAddressBookQuery, {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-first',
                skip: !isSignedIn
            });

            return { data, loading };
        } else {
            const { data, loading } = useQuery(getCustomerAddressesForAddressBookQuery, {
                fetchPolicy: 'cache-and-network',
                skip: !isSignedIn
            });

            return { data, loading, getCustomerAddressesQuery: getCustomerAddressesForAddressBookQuery };
        }
    };

export default GetCustomerAddressesForAddressBook;
