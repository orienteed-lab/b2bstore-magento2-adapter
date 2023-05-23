import { gql } from '@apollo/client';

import { AvailableShippingMethodsCheckoutFragment, SelectedShippingMethodCheckoutFragment } from '../../../fragments/shippingMethodsFragments.gql';
import { ShippingInformationFragment } from '../../../fragments/shippingInformationFragments.gql';

export const GET_SELECTED_AND_AVAILABLE_SHIPPING_METHODS = gql`
    query GetSelectedAndAvailableShippingMethods($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...AvailableShippingMethodsCheckoutFragment
            ...SelectedShippingMethodCheckoutFragment
            ...ShippingInformationFragment
        }
    }
    ${AvailableShippingMethodsCheckoutFragment}
    ${SelectedShippingMethodCheckoutFragment}
    ${ShippingInformationFragment}
`;

export default {
    getSelectedAndAvailableShippingMethodsQuery: GET_SELECTED_AND_AVAILABLE_SHIPPING_METHODS
};
