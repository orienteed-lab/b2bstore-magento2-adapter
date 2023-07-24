import { gql } from '@apollo/client';

export const GET_PRODUCTS_DETAILS_FOR_QUOTE_BY_SEARCH = gql`
    query GetProductsDetailsForQuoteBySearch($search: String) {
        products(search: $search) {
            items {
                name
                sku
                type_id
                small_image {
                    url
                }
                url_key
                url_suffix
                price {
                    regularPrice {
                        amount {
                            value
                            currency
                        }
                    }
                }
            }
        }
    }
`;

export default {
    getProductsDetailsForQuoteBySearchQuery: GET_PRODUCTS_DETAILS_FOR_QUOTE_BY_SEARCH
};
