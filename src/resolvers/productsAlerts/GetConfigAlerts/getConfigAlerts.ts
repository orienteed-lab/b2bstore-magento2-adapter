import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getConfigAlerts.gql';

const GetStoreConfig =
    (clientProps: ClientProps) => () => {
        const { useQuery, mergeOperations } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { getConfigAlertsQuery } = operations;

        const { data } = useQuery(getConfigAlertsQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { data };
    };

export default GetStoreConfig;
