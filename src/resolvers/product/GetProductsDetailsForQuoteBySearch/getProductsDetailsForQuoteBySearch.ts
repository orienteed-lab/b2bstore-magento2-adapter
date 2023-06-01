import { ClientProps } from 'src';
import { GetProductsDetailsForQuoteBySearchQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductsDetailsForQuoteBySearch.gql';

const GetProductsDetailsForQuoteBySearch =
    (clientProps: ClientProps) => (resolverProps: GetProductsDetailsForQuoteBySearchQueryVariables) => {
        const { mergeOperations, useLazyQuery } = clientProps;

        const { getProductsDetailsForQuoteBySearchQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const [runSearch, productResult] = useLazyQuery(getProductsDetailsForQuoteBySearchQuery, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { runSearch, productResult };
    };

export default GetProductsDetailsForQuoteBySearch;
