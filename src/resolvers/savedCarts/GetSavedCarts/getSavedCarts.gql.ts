import { gql } from '@apollo/client';

export const GET_SAVED_CARTS = gql`
    query GetSavedCarts($pageSize: Int, $currentPage: Int) {
        mpSaveCartGetCarts(currentPage: $currentPage, pageSize: $pageSize) {
            total_count
            page_info {
                current_page
                page_size
            }
            items {
                cart_id
                created_at
                cart_name
                description
                share_url
                token
                cart_total {
                    currency
                    value
                }
                items {
                    attribute_labels_and_values {
                        label
                        value
                    }
                    cart_id
                    cart_item_id
                    product_name
                    image
                    price
                    qty
                    sku
                    subtotal_converted
                }
            }
        }
    }
`;

export default {
    getSavedCartsQuery: GET_SAVED_CARTS
};
