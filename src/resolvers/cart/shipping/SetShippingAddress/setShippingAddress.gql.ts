import { gql } from '@apollo/client';

import { CartPageFragmentCE, CartPageFragmentEE } from '../../../fragments/cartPageFragments.gql';
import { ShippingMethodsCartFragment } from '../../../fragments/shippingMethodsFragments.gql';
import { ShippingInformationFragment } from '../../../fragments/shippingInformationFragments.gql';

export const SET_SHIPPING_ADDRESS_CE = gql`
    mutation SetShippingAddress($cartId: String!, $address: CartAddressInput!) {
        setShippingAddressesOnCart(input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }) {
            cart {
                id
                ...CartPageFragment
                ...ShippingMethodsCartFragment
                ...ShippingInformationFragment
            }
        }
    }
    ${CartPageFragmentCE}
    ${ShippingMethodsCartFragment}
    ${ShippingInformationFragment}
`;

export const SET_SHIPPING_ADDRESS_EE = gql`
    mutation SetShippingAddress($cartId: String!, $address: CartAddressInput!) {
        setShippingAddressesOnCart(input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }) {
            cart {
                id
                ...CartPageFragment
                ...ShippingMethodsCartFragment
                ...ShippingInformationFragment
            }
        }
    }
    ${CartPageFragmentEE}
    ${ShippingMethodsCartFragment}
    ${ShippingInformationFragment}
`;

export default {
    setShippingAddressMutationCE: SET_SHIPPING_ADDRESS_CE,
    setShippingAddressMutationEE: SET_SHIPPING_ADDRESS_EE
};
