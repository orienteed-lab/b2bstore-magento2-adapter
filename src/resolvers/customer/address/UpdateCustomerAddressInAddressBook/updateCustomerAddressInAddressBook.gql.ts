import { gql } from '@apollo/client';

import { CustomerAddressBookAddressFragment } from '../../../fragments/addressBookFragments.gql';

export const UPDATE_CUSTOMER_ADDRESS = gql`
    mutation UpdateCustomerAddressInAddressBook($addressId: Int!, $updated_address: CustomerAddressInput!) {
        updateCustomerAddress(id: $addressId, input: $updated_address) {
            id
            ...CustomerAddressBookAddressFragment
        }
    }
    ${CustomerAddressBookAddressFragment}
`;

export default {
    updateCustomerAddressInAddressBookMutation: UPDATE_CUSTOMER_ADDRESS
};
