import { ClientProps } from 'src';
import { GetProductDetailForProductPageByUrlKeyQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductDetailForProductPageByUrlKey.gql';

interface GetProductDetailForProductPageByUrlKeyProps extends GetProductDetailForProductPageByUrlKeyQueryVariables {
    storeConfigData?: any
}

const GetProductDetailForProductPageByUrlKey =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForProductPageByUrlKeyProps = {storeConfigData: false, urlKey: ''}) => {
        const { mergeOperations, useQuery } = clientProps;
        const { urlKey, storeConfigData } = resolverProps;

        const { getProductDetailForProductPageByUrlKeyQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { error, loading, data, refetch } = useQuery(getProductDetailForProductPageByUrlKeyQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            skip: !storeConfigData,
            variables: {
                urlKey
            }
        });

        return { data, loading, error, refetch };
    };

export default GetProductDetailForProductPageByUrlKey;
