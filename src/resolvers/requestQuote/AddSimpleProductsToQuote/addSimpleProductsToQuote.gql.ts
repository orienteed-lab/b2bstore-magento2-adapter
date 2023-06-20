import { gql } from '@apollo/client';

export const ADD_SIMPLE_PRODUCT_TO_QUOTE = gql`
    mutation AddSimpleProductsToQuote($input: AddSimpleProductsToQuoteInput) {
        addSimpleProductsToMpQuote(input: $input) {
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
                        uid
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
    addSimpleProductsToQuoteMutation: ADD_SIMPLE_PRODUCT_TO_QUOTE
};
