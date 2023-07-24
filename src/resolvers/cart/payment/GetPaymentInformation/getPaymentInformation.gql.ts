import { gql } from '@apollo/client';

import { AvailablePaymentMethodsFragment } from '../../../fragments/paymentInformation.gql';

export const GET_PAYMENT_INFORMATION = gql`
    query GetPaymentInformation($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            selected_payment_method {
                code
            }
            shipping_addresses {
                firstname
                lastname
                street
                city
                region {
                    code
                }
                postcode
                country {
                    code
                }
                telephone
            }
            ...AvailablePaymentMethodsFragment
        }
    }
    ${AvailablePaymentMethodsFragment}
`;

export default {
    getPaymentInformationQuery: GET_PAYMENT_INFORMATION
};
