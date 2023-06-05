import { gql } from '@apollo/client';

export const DELETE_CUSTOMER_ADDRESS = gql`
    mutation DeleteCustomerAddressFromAddressBook($addressId: Int!) {
        deleteCustomerAddress(id: $addressId)
    }
`;

export default {
    deleteCustomerAddressFromAddressBookMutation: DELETE_CUSTOMER_ADDRESS
};
