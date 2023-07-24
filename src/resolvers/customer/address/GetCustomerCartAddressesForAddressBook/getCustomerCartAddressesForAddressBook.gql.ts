import { gql } from '@apollo/client';

import { ShippingInformationFragment } from '../../../fragments/shippingInformationFragments.gql';

export const GET_CUSTOMER_CART_ADDRESSES = gql`
    query GetCustomerCartAddressesForAddressBook {
        customerCart {
            id
            ...ShippingInformationFragment
        }
    }
    ${ShippingInformationFragment}
`;

export default {
    getCustomerCartAddressesForAddressBookQuery: GET_CUSTOMER_CART_ADDRESSES
};
