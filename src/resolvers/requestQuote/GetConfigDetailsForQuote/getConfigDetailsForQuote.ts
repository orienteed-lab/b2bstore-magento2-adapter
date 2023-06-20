import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getConfigDetailsForQuote.gql';

const GetConfigDetailsForQuote = (clientProps: ClientProps) => () => {
    const { mergeOperations, useQuery } = clientProps;

    const { getConfigDetailsForQuoteQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getConfigDetailsForQuoteQuery, {
        fetchPolicy: 'network-only'
    });

    return { data, loading };
};

export default GetConfigDetailsForQuote;
