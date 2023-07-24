import { ClientProps } from 'src';
import { GetGiftCardBalanceQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getGiftCardBalance.gql';

const GetGiftCardBalance = (clientProps: ClientProps) => (resolverProps: GetGiftCardBalanceQueryVariables) => {
    const { mergeOperations, useLazyQuery } = clientProps;

    const { getGiftCardBalanceQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const [checkCardBalance, balanceResult] = useLazyQuery(getGiftCardBalanceQuery, {
        // For security, always fetch this from the network and never cache the
        // result.
        fetchPolicy: 'no-cache'
    });

    return { checkCardBalance, balanceResult };
};

export default GetGiftCardBalance;
