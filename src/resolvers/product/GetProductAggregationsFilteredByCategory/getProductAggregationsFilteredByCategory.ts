import { ClientProps } from 'src';
import { GetProductAggregationsFilteredByCategoryQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductAggregationsFilteredByCategory.gql';

const GetProductAggregationsFilteredByCategory =
    (clientProps: ClientProps) => (resolverProps: GetProductAggregationsFilteredByCategoryQueryVariables) => {
        const { mergeOperations, useLazyQuery } = clientProps;

        const { getProductAggregationsFilteredByCategoryQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const [getFilters, { data }] = useLazyQuery(getProductAggregationsFilteredByCategoryQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { getFilters, data };
    };

export default GetProductAggregationsFilteredByCategory;
