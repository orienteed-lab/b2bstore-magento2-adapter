import { ClientProps } from 'src';
import { GetProductDetailForAtcDialogBySkuQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductDetailForATCDialogBySku.gql';

const GetProductDetailForATCDialogBySku =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForAtcDialogBySkuQueryVariables) => {
        const { mergeOperations, useQuery } = clientProps;
        const { sku, configurableOptionValues } = resolverProps;

        const { getProductDetailForAtcDialogBySkuQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { data, loading } = useQuery(getProductDetailForAtcDialogBySkuQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            variables: {
                configurableOptionValues,
                sku
            },
            skip: !sku
        });

        return { data, loading };
    };

export default GetProductDetailForATCDialogBySku;
