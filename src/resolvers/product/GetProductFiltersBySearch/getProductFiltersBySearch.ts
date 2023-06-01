import { ClientProps } from 'src';
import { GetProductFiltersBySearchQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductFiltersBySearch.gql';

const GetProductFiltersBySearch = (clientProps: ClientProps) => (resolverProps: GetProductFiltersBySearchQueryVariables) => {
    const { mergeOperations, useLazyQuery } = clientProps;

    const { getProductFiltersBySearchQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const [getFilters, { data }] = useLazyQuery(getProductFiltersBySearchQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { getFilters, data };
};

export default GetProductFiltersBySearch;
