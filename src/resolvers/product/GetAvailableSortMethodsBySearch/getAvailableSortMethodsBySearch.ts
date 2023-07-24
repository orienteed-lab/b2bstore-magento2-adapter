import { ClientProps } from 'src';
import { GetAvailableSortMethodsBySearchQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getAvailableSortMethodsBySearch.gql';

const GetAvailableSortMethodsBySearch = (clientProps: ClientProps) => (resolverProps: GetAvailableSortMethodsBySearchQueryVariables) => {
    const { mergeOperations, useLazyQuery } = clientProps;

    const { getAvailableSortMethodsBySearchQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const [getSortMethods, { data }] = useLazyQuery(getAvailableSortMethodsBySearchQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { getSortMethods, data };
};

export default GetAvailableSortMethodsBySearch;
