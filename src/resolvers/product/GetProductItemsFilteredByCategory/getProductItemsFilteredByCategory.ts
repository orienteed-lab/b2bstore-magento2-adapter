import { ClientProps } from 'src';
import { GetProductItemsFilteredByCategoryQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductItemsFilteredByCategory.gql';

const GetProductItemsFilteredByCategory =
    (clientProps: ClientProps) => (resolverProps: GetProductItemsFilteredByCategoryQueryVariables) => {
        const { mergeOperations, useLazyQuery } = clientProps;

        const { getProductItemsFilteredByCategoryQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const [getFilters, { data }] = useLazyQuery(getProductItemsFilteredByCategoryQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { getFilters, data };
    };

export default GetProductItemsFilteredByCategory;
