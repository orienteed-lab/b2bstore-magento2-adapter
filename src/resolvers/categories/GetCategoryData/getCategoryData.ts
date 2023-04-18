import { ClientProps } from 'src';
import { GetCategoryDataQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCategoryData.gql';

interface GetCategoryDataProps extends GetCategoryDataQueryVariables {
    type: 'request';
}

const GetCategoryData = (clientProps: ClientProps) => (resolverProps: GetCategoryDataProps) => {
    const { useQuery, useLazyQuery, mergeOperations } = clientProps;
    const { type, id } = resolverProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getCategoryDataQuery } = operations;

    if (type === 'request') {
        const [runQuery, { data, loading, error }] = useLazyQuery(getCategoryDataQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { runQuery, data, loading, error };
    }

    const { data, loading, error } = useQuery(getCategoryDataQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !id,
        variables: { id }
    });

    return { data, loading, error };
};

export default GetCategoryData;
