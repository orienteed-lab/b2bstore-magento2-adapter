import { gql } from '@apollo/client';

import { PriceSummaryFragmentCE, PriceSummaryFragmentEE } from '../../../fragments/priceSummaryFragments.gql';
import { AvailablePaymentMethodsFragment } from '../../../fragments/paymentInformation.gql';

export const SET_BILLING_ADDRESS_CE = gql`
    mutation SetBillingAddress(
        $cartId: String!
        $firstName: String!
        $lastName: String!
        $street: [String]!
        $city: String!
        $regionCode: String!
        $postCode: String!
        $countryCode: String!
        $phoneNumber: String!
    ) {
        setBillingAddressOnCart(
            input: {
                cart_id: $cartId
                billing_address: {
                    address: {
                        firstname: $firstName
                        lastname: $lastName
                        street: $street
                        city: $city
                        region: $regionCode
                        postcode: $postCode
                        country_code: $countryCode
                        telephone: $phoneNumber
                        save_in_address_book: false
                    }
                }
            }
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

export const SET_BILLING_ADDRESS_EE = gql`
    mutation SetBillingAddress(
        $cartId: String!
        $firstName: String!
        $lastName: String!
        $street: [String]!
        $city: String!
        $regionCode: String!
        $postCode: String!
        $countryCode: String!
        $phoneNumber: String!
    ) {
        setBillingAddressOnCart(
            input: {
                cart_id: $cartId
                billing_address: {
                    address: {
                        firstname: $firstName
                        lastname: $lastName
                        street: $street
                        city: $city
                        region: $regionCode
                        postcode: $postCode
                        country_code: $countryCode
                        telephone: $phoneNumber
                        save_in_address_book: false
                    }
                }
            }
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
    setBillingAddressMutationCE: SET_BILLING_ADDRESS_CE,
    setBillingAddressMutationEE: SET_BILLING_ADDRESS_EE
};
