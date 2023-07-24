import { gql } from '@apollo/client';

import { AvailablePaymentMethodsFragment } from '../../../fragments/paymentInformation.gql';
import { PriceSummaryFragmentCE, PriceSummaryFragmentEE } from '../../../fragments/priceSummaryFragments.gql';
import { ShippingInformationFragment } from '../../../fragments/shippingInformationFragments.gql';
import { ShippingMethodsCheckoutFragment } from '../../../fragments/shippingMethodsFragments.gql';

export const SET_CUSTOMER_ADDRESS_ID_ON_CART_CE = gql`
    mutation SetCustomerAddressIdOnCart($cartId: String!, $addressId: Int!) {
        setShippingAddressesOnCart(
            input: { cart_id: $cartId, shipping_addresses: [{ customer_address_id: $addressId }] }
        ) {
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

export const SET_CUSTOMER_ADDRESS_ID_ON_CART_EE = gql`
    mutation SetCustomerAddressIdOnCart($cartId: String!, $addressId: Int!) {
        setShippingAddressesOnCart(
            input: { cart_id: $cartId, shipping_addresses: [{ customer_address_id: $addressId }] }
        ) {
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
    setCustomerAddressIdOnCartMutationCE: SET_CUSTOMER_ADDRESS_ID_ON_CART_CE,
    setCustomerAddressIdOnCartMutationEE: SET_CUSTOMER_ADDRESS_ID_ON_CART_EE
};
