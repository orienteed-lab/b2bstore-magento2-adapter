import { ClientProps } from 'src';
import { GetProductsForPagebuilderByUrlKeyQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductsForPagebuilderByUrlKey.gql';

const GetProductsForPagebuilderByUrlKey =
    (clientProps: ClientProps) => (resolverProps: GetProductsForPagebuilderByUrlKeyQueryVariables) => {
        const { mergeOperations, useQuery } = clientProps;
        const { pageSize, url_keys } = resolverProps;

        const { getProductsForPagebuilderByUrlKeyQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { loading, error, data, refetch } = useQuery(getProductsForPagebuilderByUrlKeyQuery, {
            variables: { url_keys: url_keys, pageSize: pageSize }
        });

        return { loading, error, data, refetch };
    };

export default GetProductsForPagebuilderByUrlKey;
