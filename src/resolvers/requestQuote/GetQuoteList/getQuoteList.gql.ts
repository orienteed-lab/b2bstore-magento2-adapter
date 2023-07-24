import { gql } from '@apollo/client';

export const GET_QUOTE_LIST = gql`
    query GetQuoteList($filter: MpQuoteFilterInput, $pageSize: Int, $currentPage: Int) {
        mpQuoteList(filter: $filter, currentPage: $currentPage, pageSize: $pageSize) {
            page_info {
                current_page
                page_size
                total_pages
            }
            items {
                created_at
                quote_currency_code
                status
                subtotal
                entity_id
                expired_at
                discount
                items {
                    name
                    sku
                    request_price
                    qty
                    discount
                    prices {
                        total_item_discount {
                            currency
                            value
                        }
                        row_total {
                            currency
                            value
                        }
                        price {
                            currency
                            value
                        }
                    }
                    ... on ConfigurableQuoteItem {
                        configurable_options {
                            id
                            option_label
                            value_id
                            value_label
                        }
                    }
                }
            }
        }
    }
`;

export default {
    getQuoteListQuery: GET_QUOTE_LIST
};
