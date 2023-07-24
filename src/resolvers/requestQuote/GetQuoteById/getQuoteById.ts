import { ClientProps } from 'src';
import { GetQuoteByIdQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getQuoteById.gql';

interface GetQuoteByIdProps extends GetQuoteByIdQueryVariables {
    hasNextFetchPolicy: boolean;
}

const GetQuoteById =
    (clientProps: ClientProps) =>
    (resolverProps: GetQuoteByIdProps = { hasNextFetchPolicy: false }) => {
        const { mergeOperations, useQuery } = clientProps;
        const { quote_id, hasNextFetchPolicy } = resolverProps;

        const { getQuoteByIdQuery } = mergeOperations(DEFAULT_OPERATIONS);

        if (hasNextFetchPolicy) {
            const { data } = useQuery(getQuoteByIdQuery, {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-first',
                variables: {
                    quote_id
                }
            });

            return { data };
        }

        const { data, loading } = useQuery(getQuoteByIdQuery, {
            fetchPolicy: 'network-only',
            variables: {
                quote_id
            }
        });

        return { data, loading };
    };

export default GetQuoteById;
