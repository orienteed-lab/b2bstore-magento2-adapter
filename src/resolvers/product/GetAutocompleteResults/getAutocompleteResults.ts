import { ClientProps } from 'src';
import { GetAutocompleteResultsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getAutocompleteResults.gql';

interface GetAutocompleteResultsProps extends GetAutocompleteResultsQueryVariables {
    hasVars: boolean
}

const GetAutocompleteResults = (clientProps: ClientProps) => (resolverProps: GetAutocompleteResultsProps) => {
    const { mergeOperations, useLazyQuery } = clientProps;
    const { hasVars } = resolverProps;

    const { getAutocompleteResultsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    if (hasVars) {
        const { inputText } = resolverProps;

        const [runSearch, productResult] = useLazyQuery(getAutocompleteResultsQuery, {
            fetchPolicy: 'cache-and-network',
            variables: { search_query: inputText },
            nextFetchPolicy: 'cache-first'
        });

        return { runSearch, productResult };
    } else {
        const [runSearch, productResult] = useLazyQuery(getAutocompleteResultsQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { runSearch, productResult };
    }
};

export default GetAutocompleteResults;
