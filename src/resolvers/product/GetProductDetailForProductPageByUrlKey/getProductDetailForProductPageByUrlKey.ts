import { ClientProps } from 'src';
import { GetProductDetailForProductPageByUrlKeyQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductDetailForProductPageByUrlKey.gql';

interface GetProductDetailForProductPageByUrlKeyProps extends GetProductDetailForProductPageByUrlKeyQueryVariables {
    storeConfigData?: any;
    includeProductAlert?: boolean;
    includeProductAttachment?: boolean;
}

const GetProductDetailForProductPageByUrlKey =
    (clientProps: ClientProps) =>
    (
        resolverProps: GetProductDetailForProductPageByUrlKeyProps = {
            storeConfigData: false,
            urlKey: '',
            includeProductAlert: false,
            includeProductAttachment: false
        }
    ) => {
        const { mergeOperations, useQuery } = clientProps;
        const { urlKey, storeConfigData, includeProductAlert, includeProductAttachment } = resolverProps;

        const { getProductDetailForProductPageByUrlKeyQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { error, loading, data, refetch } = useQuery(getProductDetailForProductPageByUrlKeyQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            skip: !storeConfigData,
            variables: {
                urlKey,
                includeProductAlert,
                includeProductAttachment
            }
        });

        return { data, loading, error, refetch };
    };

export default GetProductDetailForProductPageByUrlKey;
