import { gql } from '@apollo/client';

import { AvailableShippingMethodsCheckoutFragment, SelectedShippingMethodCheckoutFragment } from '../../../fragments/shippingMethodsFragments.gql';
import { PriceSummaryFragmentCE, PriceSummaryFragmentEE } from '../../../fragments/priceSummaryFragments.gql';
import { ShippingInformationFragment } from '../../../fragments/shippingInformationFragments.gql';

export const SET_SHIPPING_METHOD_CE = gql`
    mutation SetShippingMethod($cartId: String!, $shippingMethod: ShippingMethodInput!) {
        setShippingMethodsOnCart(input: { cart_id: $cartId, shipping_methods: [$shippingMethod] }) {
            cart {
                id
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
                ...AvailableShippingMethodsCheckoutFragment
                ...PriceSummaryFragment
                ...SelectedShippingMethodCheckoutFragment
                ...ShippingInformationFragment
            }
        }
    }
    ${AvailableShippingMethodsCheckoutFragment}
    ${PriceSummaryFragmentCE}
    ${SelectedShippingMethodCheckoutFragment}
    ${ShippingInformationFragment}
`;

export const SET_SHIPPING_METHOD_EE = gql`
    mutation SetShippingMethod($cartId: String!, $shippingMethod: ShippingMethodInput!) {
        setShippingMethodsOnCart(input: { cart_id: $cartId, shipping_methods: [$shippingMethod] }) {
            cart {
                id
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
                ...AvailableShippingMethodsCheckoutFragment
                ...PriceSummaryFragment
                ...SelectedShippingMethodCheckoutFragment
                ...ShippingInformationFragment
            }
        }
    }
    ${AvailableShippingMethodsCheckoutFragment}
    ${PriceSummaryFragmentEE}
    ${SelectedShippingMethodCheckoutFragment}
    ${ShippingInformationFragment}
`;

export default {
    setShippingMethodMutationCE: SET_SHIPPING_METHOD_CE,
    setShippingMethodMutationEE: SET_SHIPPING_METHOD_EE
};
