import { ClientProps } from 'src';
import { GetWishlistProductsForLocalFieldQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getWishlistProductsForLocalField.gql';
import WISHLIST_OPERATIONS from '../GetProductsInWishlists/getProductsInWishlists.gql';

interface GetWishlistProductsForLocalFieldProps extends GetWishlistProductsForLocalFieldQueryVariables {
    customerWishlistProducts: any;
    client: any;
    setCurrentPage: any;
    isSignedIn: boolean;
}

const GetWishlistProductsForLocalField = (clientProps: ClientProps) => (resolverProps: GetWishlistProductsForLocalFieldProps) => {
    const { mergeOperations, useQuery } = clientProps;
    const { currentPage, client, isSignedIn, customerWishlistProducts, setCurrentPage } = resolverProps;

    const { getWishlistProductsForLocalFieldQuery, getProductsInWishlistsQuery } = mergeOperations(DEFAULT_OPERATIONS, WISHLIST_OPERATIONS);

    useQuery(getWishlistProductsForLocalFieldQuery, {
        fetchPolicy: 'cache-and-network',
        onCompleted: (data: any) => {
            const itemsToAdd = new Set();
            const wishlists = data.customer.wishlists;
            let shouldFetchMore = false;
            wishlists.map((wishlist: any) => {
                const items = wishlist.items_v2.items;
                items.map((item: any) => {
                    const sku = item.product.sku;
                    if (!customerWishlistProducts.includes(sku)) {
                        itemsToAdd.add(sku);
                    }
                });

                const pageInfo = wishlist.items_v2.page_info;

                if (pageInfo.total_pages > pageInfo.current_page) {
                    shouldFetchMore = true;
                }
            });

            if (itemsToAdd.size) {
                client.writeQuery({
                    query: getProductsInWishlistsQuery,
                    data: {
                        customerWishlistProducts: [...customerWishlistProducts, ...itemsToAdd]
                    }
                });
            }

            if (shouldFetchMore) {
                setCurrentPage((current: any) => ++current);
            }
        },
        skip: !isSignedIn,
        variables: {
            currentPage
        }
    });
};

export default GetWishlistProductsForLocalField;
