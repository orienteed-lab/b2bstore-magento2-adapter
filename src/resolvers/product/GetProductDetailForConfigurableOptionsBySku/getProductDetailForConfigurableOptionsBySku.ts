import { ClientProps } from 'src';
import { GetProductDetailForConfigurableOptionsBySkuQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductDetailForConfigurableOptionsBySku.gql';

interface GetProductDetailForConfigurableOptionsBySkuProps extends GetProductDetailForConfigurableOptionsBySkuQueryVariables {
    isLazy: boolean,
    cartItem?: any
}

const GetProductDetailForConfigurableOptionsBySku =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForConfigurableOptionsBySkuProps) => {
        const { mergeOperations, useQuery, useLazyQuery } = clientProps;
        const { isLazy } = resolverProps;

        const { getProductDetailForConfigurableOptionsBySkuQuery } = mergeOperations(DEFAULT_OPERATIONS);

        if (isLazy) {
            const [runQuery, queryResult] = useLazyQuery(getProductDetailForConfigurableOptionsBySkuQuery);

            return { runQuery, queryResult };
        } else {
            const { cartItem } = resolverProps;

            const { data, error, loading } = useQuery(getProductDetailForConfigurableOptionsBySkuQuery, {
                skip: !cartItem,
                variables: {
                    sku: cartItem ? cartItem.product.sku : null
                }
            });

            return { data, error, loading };
        }
    };

export default GetProductDetailForConfigurableOptionsBySku;
