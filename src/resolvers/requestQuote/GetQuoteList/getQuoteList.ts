import { ClientProps } from 'src';
import { GetQuoteListQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getQuoteList.gql';

const GetQuoteList =
    (clientProps: ClientProps) =>
    (resolverProps: GetQuoteListQueryVariables = { currentPage: 1, filter: {}, pageSize: 1 }) => {
        const { mergeOperations, useQuery } = clientProps;
        const { currentPage, filter, pageSize } = resolverProps;

        const { getQuoteListQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { data, refetch, loading } = useQuery(getQuoteListQuery, {
            fetchPolicy: 'network-only',
            variables: {
                pageSize: pageSize,
                currentPage: currentPage || 1
            }
        });

        return { data, loading, refetch };
    };

export default GetQuoteList;
