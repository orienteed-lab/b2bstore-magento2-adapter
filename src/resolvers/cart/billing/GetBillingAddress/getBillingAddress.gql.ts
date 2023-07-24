import { gql } from '@apollo/client';

export const GET_BILLING_ADDRESS = gql`
    query GetBillingAddress($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            billingAddress: billing_address {
                firstName: firstname
                lastName: lastname
                country {
                    code
                    label
                }
                street
                city
                region {
                    code
                    label
                }
                postcode
                phoneNumber: telephone
            }
        }
    }
`;

export default {
    getBillingAddressQuery: GET_BILLING_ADDRESS
};
