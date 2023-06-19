import { gql } from '@apollo/client';

export const ADD_CONFIGURABLE_PRODUCT_TO_QUOTE = gql`
    mutation AddConfigurableProductsToQuote($input: AddConfigurableProductsToQuoteInput) {
        addConfigurableProductsToMpQuote(input: $input) {
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
    addConfigurableProductsToQuoteMutation: ADD_CONFIGURABLE_PRODUCT_TO_QUOTE
};
