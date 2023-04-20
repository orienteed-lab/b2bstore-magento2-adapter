import { ClientProps } from 'src';
import { GetCmsPageQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCmsPage.gql';

const GetCmsPage = (clientProps: ClientProps) => (resolverProps: GetCmsPageQueryVariables) => {
    const { useQuery, mergeOperations } = clientProps;
    const { identifier } = resolverProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getCmsPageQuery } = operations;

    const { data, loading, error } = useQuery(getCmsPageQuery, {
        variables: {
            identifier
        },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data, loading, error };
};

export default GetCmsPage;
