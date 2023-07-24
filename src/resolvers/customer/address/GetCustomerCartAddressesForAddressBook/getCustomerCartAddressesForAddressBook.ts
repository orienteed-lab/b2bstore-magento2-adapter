import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCustomerCartAddressesForAddressBook.gql';

interface GetCustomerCartAddressesForAddressBookProps {
    isSignedIn: boolean
}

const GetCustomerCartAddressesForAddressBook = (clientProps: ClientProps) => (resolverProps: GetCustomerCartAddressesForAddressBookProps) => {
    const { mergeOperations, useQuery } = clientProps;
    const { isSignedIn } = resolverProps;
    
    const { getCustomerCartAddressesForAddressBookQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(
        getCustomerCartAddressesForAddressBookQuery,
        {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            skip: !isSignedIn
        }
    );


    return { data, loading };
};

export default GetCustomerCartAddressesForAddressBook;
