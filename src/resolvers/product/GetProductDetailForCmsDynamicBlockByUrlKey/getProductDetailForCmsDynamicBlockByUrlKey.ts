import { ClientProps } from 'src';
import { GetProductDetailForCmsDynamicBlockByUrlKeyQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductDetailForCmsDynamicBlockByUrlKey.gql';

interface GetProductDetailForCmsDynamicBlockByUrlKeyProps extends GetProductDetailForCmsDynamicBlockByUrlKeyQueryVariables {
    storeConfigData: any
}

const GetProductDetailForCmsDynamicBlockByUrlKey =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForCmsDynamicBlockByUrlKeyProps) => {
        const { mergeOperations, useQuery } = clientProps;
        const { urlKey, storeConfigData } = resolverProps;

        const { getProductDetailForCmsDynamicBlockByUrlKeyQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { data, loading } = useQuery(getProductDetailForCmsDynamicBlockByUrlKeyQuery, {
            skip: !storeConfigData,
            variables: {
                urlKey
            }
        });

        return { data, loading };
    };

export default GetProductDetailForCmsDynamicBlockByUrlKey;
