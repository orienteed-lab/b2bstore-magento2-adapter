import { gql } from '@apollo/client';

import { CustomerAddressBookAddressFragment } from '../../../fragments/addressBookFragments.gql';

export const ADD_NEW_CUSTOMER_ADDRESS = gql`
    mutation AddNewCustomerAddressToAddressBook($address: CustomerAddressInput!) {
        createCustomerAddress(input: $address) {
            id
            ...CustomerAddressBookAddressFragment
        }
    }
    ${CustomerAddressBookAddressFragment}
`;

export default {
    addNewCustomerAddressToAddressBookMutation: ADD_NEW_CUSTOMER_ADDRESS
};
