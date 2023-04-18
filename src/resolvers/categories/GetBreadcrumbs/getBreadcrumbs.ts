import { ClientProps } from 'src';
import { GetBreadcrumbsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getBreadcrumbs.gql';

const GetBreadcrumbs = (clientProps: ClientProps) => (resolverProps: GetBreadcrumbsQueryVariables) => {
    const { useQuery, mergeOperations } = clientProps;
    const { category_id } = resolverProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getBreadcrumbsQuery } = operations;

    const { data, loading, error } = useQuery(getBreadcrumbsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: { category_id }
    });

    return { data, loading, error };
};

export default GetBreadcrumbs;
