import { gql } from '@apollo/client';

import { AvailablePaymentMethodsFragment } from '../../fragments/paymentInformation.gql';
import { PriceSummaryFragmentCE, PriceSummaryFragmentEE } from '../../fragments/priceSummaryFragments.gql';
import { ShippingMethodsCheckoutFragment } from '../../fragments/shippingMethodsFragments.gql';
import { ShippingInformationFragment } from '../../fragments/shippingInformationFragments.gql';

export const SET_GUEST_SHIPPING_CE = gql`
    mutation SetGuestShipping($cartId: String!, $email: String!, $address: CartAddressInput!) {
        setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
            cart {
                id
            }
        }
        setShippingAddressesOnCart(input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }) {
            cart {
                id
                ...AvailablePaymentMethodsFragment
                ...PriceSummaryFragment
                ...ShippingInformationFragment
                ...ShippingMethodsCheckoutFragment
            }
        }
    }
    ${AvailablePaymentMethodsFragment}
    ${PriceSummaryFragmentCE}
    ${ShippingInformationFragment}
    ${ShippingMethodsCheckoutFragment}
`;

export const SET_GUEST_SHIPPING_EE = gql`
    mutation SetGuestShipping($cartId: String!, $email: String!, $address: CartAddressInput!) {
        setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
            cart {
                id
            }
        }
        setShippingAddressesOnCart(input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }) {
            cart {
                id
                ...AvailablePaymentMethodsFragment
                ...PriceSummaryFragment
                ...ShippingInformationFragment
                ...ShippingMethodsCheckoutFragment
            }
        }
    }
    ${AvailablePaymentMethodsFragment}
    ${PriceSummaryFragmentEE}
    ${ShippingInformationFragment}
    ${ShippingMethodsCheckoutFragment}
`;

export default {
    setGuestShippingMutationCE: SET_GUEST_SHIPPING_CE,
    setGuestShippingMutationEE: SET_GUEST_SHIPPING_EE
};
