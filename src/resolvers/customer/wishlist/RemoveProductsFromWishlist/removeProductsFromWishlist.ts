import { ClientProps } from 'src';
import { RemoveProductsFromWishlistMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './removeProductsFromWishlist.gql';
import { ItemsReviewFragment } from 'src/resolvers/fragments/itemsReviewFragments.gql';

interface RemoveProductsFromWishlistProps extends RemoveProductsFromWishlistMutationVariables {
    sku?: any;
    item?: any;
    isFromUse?: boolean;
    isFromUseSingle?: boolean;
}

const RemoveProductsFromWishlist =
    (clientProps: ClientProps) =>
    (
        resolverProps: RemoveProductsFromWishlistProps = { isFromUse: false, wishlistId: '', wishlistItemsId: '', isFromUseSingle: false }
    ) => {
        const { mergeOperations, backendEdition, useMutation } = clientProps;
        const { wishlistId, wishlistItemsId, isFromUse, isFromUseSingle } = resolverProps;

        const { removeProductsFromWishlistMutationCE, removeProductsFromWishlistMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
        const removeProductsFromWishlistMutation =
            backendEdition === 'EE' ? removeProductsFromWishlistMutationEE : removeProductsFromWishlistMutationCE;

        if (isFromUse) {
            const { sku, item } = resolverProps;
            const [removeProductsFromWishlist] = useMutation(removeProductsFromWishlistMutation, {
                update: (cache: any) => {
                    // clean up for cache fav product on category page
                    cache.modify({
                        id: 'ROOT_QUERY',
                        fields: {
                            customerWishlistProducts: (cachedProducts: any) =>
                                cachedProducts.filter((productSku: any) => productSku !== sku)
                        }
                    });

                    cache.modify({
                        id: `CustomerWishlist:${wishlistId}`,
                        fields: {
                            items_v2: (cachedItems: { items: string | any[] }, { readField, Remove }: any) => {
                                for (let i = 0; i < cachedItems.items.length; i++) {
                                    if (readField('id', item) === wishlistItemsId[0]) {
                                        return Remove;
                                    }
                                }

                                return cachedItems;
                            }
                        }
                    });
                },
                variables: {
                    wishlistId,
                    wishlistItemsId
                }
            });

            return { removeProductsFromWishlist };
        } else if (isFromUseSingle) {
            const { item } = resolverProps;
            const [removeProductsFromWishlist, { data, error }] = useMutation(removeProductsFromWishlistMutation, {
                update: (cache: any) => {
                    cache.modify({
                        id: 'ROOT_QUERY',
                        fields: {
                            customerWishlistProducts: (cachedProducts: any) => {
                                return cachedProducts.filter((sku: any) => sku !== item.sku);
                            }
                        }
                    });
                }
            });

            return { removeProductsFromWishlist, data, error };
        } else {
            const [removeProductsFromWishlist] = useMutation(removeProductsFromWishlistMutation, {
                update: (cache: any) => {
                    cache.modify({
                        id: 'ROOT_QUERY',
                        fields: {
                            customerWishlistProducts: (cachedProducts: any) => {
                                return cachedProducts.slice(0, 0);
                            }
                        }
                    });

                    cache.modify({
                        id: `CustomerWishlist:${wishlistId}`,
                        fields: {
                            items_v2: (cachedItems: { items: string | any[] }, { Remove }: any) => {
                                for (let i = 0; i < cachedItems.items.length; i++) {
                                    return Remove;
                                }
                                return cachedItems;
                            }
                        }
                    });
                },
                variables: {
                    wishlistId,
                    wishlistItemsId
                }
            });

            return { removeProductsFromWishlist };
        }
    };

export default RemoveProductsFromWishlist;
