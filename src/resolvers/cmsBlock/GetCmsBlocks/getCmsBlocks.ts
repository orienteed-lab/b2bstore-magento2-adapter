import { ClientProps } from 'src';
import { GetCmsBlocksQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCmsBlocks.gql';

const GetCmsBlocks = (clientProps: ClientProps) => (resolverProps: GetCmsBlocksQueryVariables) => {
    const { useQuery, mergeOperations } = clientProps;
    const { identifiers } = resolverProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getCmsBlocksQuery } = operations;

    const { data, loading, error } = useQuery(getCmsBlocksQuery, {
        variables: {
            identifiers
        },
        fetchPolicy: 'cache-and-network'
    });

    return { data, loading, error };
};

export default GetCmsBlocks;
