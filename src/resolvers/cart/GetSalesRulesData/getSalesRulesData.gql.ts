import { gql } from '@apollo/client';

export const GET_SALES_RULES_DATA = gql`
    query GetSalesRulesData($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            items {
                uid

                product {
                    uid
                    ... on PhysicalProductInterface {
                        weight
                    }
                }
                quantity

                ... on ConfigurableCartItem {
                    configured_variant {
                        uid
                        ... on PhysicalProductInterface {
                            weight
                        }
                    }
                }
            }
            prices {
                subtotal_excluding_tax {
                    value
                }
                subtotal_including_tax {
                    value
                }
            }
            selected_payment_method {
                code
            }
            shipping_addresses {
                country {
                    code
                }
                postcode
                region {
                    code
                    region_id
                }
                street
                selected_shipping_method {
                    method_code
                }
            }
            total_quantity
        }
    }
`;

export default {
    getSalesRulesDataQuery: GET_SALES_RULES_DATA
};
