import { ClientProps } from 'src';
import { GetProductsDetailsBySearchQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductsDetailsBySearch.gql';

const GetProductsDetailsBySearch = (clientProps: ClientProps) => (resolverProps: GetProductsDetailsBySearchQueryVariables) => {
    const { mergeOperations, useLazyQuery } = clientProps;

    const { getProductsDetailsBySearchQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const [runQuery, { called, loading, error, data }] = useLazyQuery(
        getProductsDetailsBySearchQuery,
        {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );

    return { runQuery, data, loading, error, called };
};

export default GetProductsDetailsBySearch;
