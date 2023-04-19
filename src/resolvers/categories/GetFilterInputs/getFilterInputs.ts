import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getFilterInputs.gql';

const GetFilterInputs = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getFilterInputsQuery } = operations;

    const { data, loading, error, called } = useQuery(getFilterInputsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data, loading, error, called };
};

export default GetFilterInputs;
