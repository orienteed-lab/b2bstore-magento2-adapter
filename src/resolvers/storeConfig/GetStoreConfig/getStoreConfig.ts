import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getStoreConfig.gql';

interface GetStoreConfigProps {
    performQuery?: boolean;
}

const GetStoreConfig =
    (clientProps: ClientProps) =>
    (resolverProps: GetStoreConfigProps = { performQuery: true }) => {
        const { useQuery, mergeOperations, backendEdition } = clientProps;
        const { performQuery } = resolverProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { getStoreConfigCEQuery, getStoreConfigEEQuery } = operations;

        if (!performQuery) {
            return { getStoreConfigCEQuery, getStoreConfigEEQuery };
        }

        const getStoreConfigQuery = backendEdition === 'EE' ? getStoreConfigEEQuery : getStoreConfigCEQuery;

        const { data, loading, error, refetch } = useQuery(getStoreConfigQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { data, loading, error, refetch };
    };

export default GetStoreConfig;
