import { ClientProps } from 'src';
import { GetProductThumbnailsByUrlKeyQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductThumbnailsByUrlKey.gql';

const GetProductThumbnailsByUrlKey = (clientProps: ClientProps) => (resolverProps: GetProductThumbnailsByUrlKeyQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { urlKeys } = resolverProps;

    const { getProductThumbnailsByUrlKeyQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getProductThumbnailsByUrlKeyQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: {
            urlKeys
        }
    });

    return { data, loading };
};

export default GetProductThumbnailsByUrlKey;
