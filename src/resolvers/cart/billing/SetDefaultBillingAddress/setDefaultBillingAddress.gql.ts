import { gql } from '@apollo/client';

import { PriceSummaryFragmentCE, PriceSummaryFragmentEE } from '../../../fragments/priceSummaryFragments.gql';
import { AvailablePaymentMethodsFragment } from '../../../fragments/paymentInformation.gql';

export const SET_DEFAULT_BILLING_ADDRESS_CE = gql`
    mutation SetDefaultBillingAddress($cartId: String!, $customerAddressId: Int) {
        setBillingAddressOnCart(
            input: { cart_id: $cartId, billing_address: { customer_address_id: $customerAddressId } }
        ) @connection(key: "setBillingAddressOnCart") {
            cart {
                id
                billing_address {
                    firstname
                    lastname
                    country {
                        code
                    }
                    street
                    city
                    region {
                        code
                    }
                    postcode
                    telephone
                }
                ...PriceSummaryFragmentCE
                ...AvailablePaymentMethodsFragment
            }
        }
    }
    ${PriceSummaryFragmentCE}
    ${AvailablePaymentMethodsFragment}
`;

export const SET_DEFAULT_BILLING_ADDRESS_EE = gql`
    mutation SetDefaultBillingAddress($cartId: String!, $customerAddressId: Int) {
        setBillingAddressOnCart(
            input: { cart_id: $cartId, billing_address: { customer_address_id: $customerAddressId } }
        ) @connection(key: "setBillingAddressOnCart") {
            cart {
                id
                billing_address {
                    firstname
                    lastname
                    country {
                        code
                    }
                    street
                    city
                    region {
                        code
                    }
                    postcode
                    telephone
                }
                ...PriceSummaryFragmentEE
                ...AvailablePaymentMethodsFragment
            }
        }
    }
    ${PriceSummaryFragmentEE}
    ${AvailablePaymentMethodsFragment}
`;

export default {
    setDefaultBillingAddressMutationCE: SET_DEFAULT_BILLING_ADDRESS_CE,
    setDefaultBillingAddressMutationEE: SET_DEFAULT_BILLING_ADDRESS_EE
};
