import { ClientProps } from 'src';
import { GetAvailableSortMethodsByCategoryQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getAvailableSortMethodsByCategory.gql';

const GetAvailableSortMethodsByCategory =
    (clientProps: ClientProps) => (resolverProps: GetAvailableSortMethodsByCategoryQueryVariables) => {
        const { mergeOperations, useLazyQuery } = clientProps;

        const { getAvailableSortMethodsByCategoryQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const [getSortMethods, { data }] = useLazyQuery(getAvailableSortMethodsByCategoryQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { getSortMethods, data };
    };

export default GetAvailableSortMethodsByCategory;
