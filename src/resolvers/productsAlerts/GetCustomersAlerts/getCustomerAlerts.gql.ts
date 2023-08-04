import { gql } from '@apollo/client';

export const GET_CUSTOMERS_ALERTS = gql`
    query getCustomersAlerts($priceCurrentPage: Int = 1, $stockCurrentPage: Int = 1) {
        customer {
            mp_product_alert {
                product_price(pageSize: 5, currentPage: $priceCurrentPage) {
                    pageInfo {
                        currentPage
                        hasNextPage
                        pageSize
                    }
                    total_count
                    items {
                        customer_email
                        customer_group
                        customer_id
                        last_send_date
                        old_price
                        product_id
                        send_count
                        store_id
                        status
                        subscribe_created_at
                        subscribe_updated_at
                        subscriber_id
                        product_data {
                            name
                            product_image_url
                            sku
                        }
                        type
                        website_id
                        __typename
                    }
                }
                out_of_stock(pageSize: 5, currentPage: $stockCurrentPage) {
                    total_count
                    pageInfo {
                        currentPage
                        hasNextPage
                        pageSize
                    }
                    items {
                        customer_email
                        customer_group
                        customer_id
                        last_send_date
                        old_price
                        product_id
                        send_count
                        store_id
                        status
                        subscribe_created_at
                        subscribe_updated_at
                        subscriber_id
                        type
                        website_id
                        product_data {
                            name
                            product_image_url
                            sku
                        }
                        __typename
                    }
                }
            }
        }
    }
`;

export default {
    getCustomerAlertsQuery: GET_CUSTOMERS_ALERTS
};
