import { gql } from '@apollo/client';

export const GET_QUOTE_BY_ID = gql`
    query GetQuoteById($quote_id: Int) {
        mpQuote(quote_id: $quote_id) {
            quote {
                base_currency_code
                base_subtotal
                created_at
                customer_email
                entity_id
                items_count
                items_qty
                subtotal
                quote_currency_code
                items {
                    id
                    quote_id
                    sku
                    qty
                    name
                    prices {
                        row_total {
                            currency
                            value
                        }
                    }
                    product {
                        name
                        url_key
                        url_suffix
                        thumbnail {
                            url
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
    getQuoteByIdQuery: GET_QUOTE_BY_ID
};
