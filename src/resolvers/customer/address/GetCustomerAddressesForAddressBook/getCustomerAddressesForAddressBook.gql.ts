import { gql } from '@apollo/client';

import { CustomerAddressBookAddressFragment } from '../../../fragments/addressBookFragments.gql';

export const GET_CUSTOMER_ADDRESSES = gql`
    query GetCustomerAddressesForAddressBook {
        customer {
            id
            addresses {
                id
                ...CustomerAddressBookAddressFragment
            }
        }
        countries {
            id
            full_name_locale
        }
    }
    ${CustomerAddressBookAddressFragment}
`;

export default {
    getCustomerAddressesForAddressBookQuery: GET_CUSTOMER_ADDRESSES
};
