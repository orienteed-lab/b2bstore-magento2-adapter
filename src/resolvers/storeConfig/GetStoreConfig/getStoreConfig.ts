import { ClientProps } from 'src';
import DEFAULT_OPERATIONS from './getStoreConfig.gql';

const GetStoreConfig = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations, backendEdition } = clientProps;
    const operations = mergeOperations(DEFAULT_OPERATIONS);

    const { getStoreConfigCEQuery, getStoreConfigEEQuery } = operations;
    const getStoreConfigQuery = backendEdition === 'EE' ? getStoreConfigEEQuery : getStoreConfigCEQuery;

    const { data, refetch } = useQuery(getStoreConfigQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data, refetch };
};

export default GetStoreConfig;
