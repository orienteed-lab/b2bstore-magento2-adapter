import { ClientProps } from 'src';
import { ResolveUrlQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './resolveURL.gql';

const ResolveURL = (clientProps: ClientProps) => (resolverProps: ResolveUrlQueryVariables) => {
    const { useLazyQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { resolveUrlQuery } = operations;

    const [runQuery, { data, loading, error, called }] = useLazyQuery(resolveUrlQuery);

    return { runQuery, data, loading, error, called };
};

export default ResolveURL;
