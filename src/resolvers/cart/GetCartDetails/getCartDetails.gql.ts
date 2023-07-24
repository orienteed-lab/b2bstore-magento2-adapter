import { gql } from '@apollo/client';

import { CartPageFragmentCE, CartPageFragmentEE } from '../../fragments/cartPageFragments.gql';

export const GET_CART_DETAILS_CE = gql`
    query GetCartDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            items {
                uid
                prices {
                    price {
                        value
                    }
                }
                product {
                    uid
                    name
                    sku
                    small_image {
                        url
                        label
                    }
                    price {
                        regularPrice {
                            amount {
                                value
                            }
                        }
                    }
                }
                quantity
                ... on ConfigurableCartItem {
                    configurable_options {
                        configurable_product_option_uid
                        option_label
                        configurable_product_option_value_uid
                        value_label
                    }
                }
            }
            prices {
                grand_total {
                    value
                    currency
                }
            }
            ...CartPageFragment
        }
    }
    ${CartPageFragmentCE}
`;

export const GET_CART_DETAILS_EE = gql`
    query GetCartDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            items {
                uid
                prices {
                    price {
                        value
                    }
                }
                product {
                    uid
                    name
                    sku
                    small_image {
                        url
                        label
                    }
                    price {
                        regularPrice {
                            amount {
                                value
                            }
                        }
                    }
                }
                quantity
                ... on ConfigurableCartItem {
                    configurable_options {
                        configurable_product_option_uid
                        option_label
                        configurable_product_option_value_uid
                        value_label
                    }
                }
            }
            prices {
                grand_total {
                    value
                    currency
                }
            }
            ...CartPageFragment
        }
    }
    ${CartPageFragmentEE}
`;

export default {
    getCartDetailsCEQuery: GET_CART_DETAILS_CE,
    getCartDetailsEEQuery: GET_CART_DETAILS_EE
};
