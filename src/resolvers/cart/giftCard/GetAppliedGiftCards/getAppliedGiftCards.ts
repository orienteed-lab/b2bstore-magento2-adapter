import { ClientProps } from 'src';
import { GetAppliedGiftCardsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getAppliedGiftCards.gql';

const GetAppliedGiftCards = (clientProps: ClientProps) => (resolverProps: GetAppliedGiftCardsQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getAppliedGiftCardsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const appliedCardsResult = useQuery(getAppliedGiftCardsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !cartId,
        variables: { cartId }
    });

    return { appliedCardsResult };
};

export default GetAppliedGiftCards;
