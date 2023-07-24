import { ClientProps } from 'src';
import { GetCategoryQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCategory.gql';

const GetCategory = (clientProps: ClientProps) => (resolverProps: GetCategoryQueryVariables) => {
    const { useLazyQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getCategoryQuery } = operations;

    const [runQuery, { data, loading, error, called }] = useLazyQuery(getCategoryQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { runQuery, data, loading, error, called };
};

export default GetCategory;
