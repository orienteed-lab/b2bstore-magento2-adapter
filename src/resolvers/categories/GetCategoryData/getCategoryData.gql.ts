import { gql } from '@apollo/client';

export const GET_CATEGORY_DATA = gql`
    query GetCategoryData($id: String!) {
        categories(filters: { category_uid: { in: [$id] } }) {
            items {
                children_count
                description
                include_in_menu
                name
                uid
                url_key
                url_path
                children {
                    children_count
                    image
                    include_in_menu
                    name
                    path
                    position
                    uid
                    url_key
                    url_path
                    url_suffix
                    productImagePreview: products(pageSize: 1) {
                        items {
                            uid
                            small_image {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default {
    getCategoryDataQuery: GET_CATEGORY_DATA
};
