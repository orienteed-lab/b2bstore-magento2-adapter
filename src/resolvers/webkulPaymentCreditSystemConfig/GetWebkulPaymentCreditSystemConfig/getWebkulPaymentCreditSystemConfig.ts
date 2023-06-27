import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getWebkulPaymentCreditSystemConfig.gql';

const GetWebkulPaymentCreditSystemConfig = (clientProps: ClientProps) => () => {
    const { mergeOperations, useQuery } = clientProps;

    const { getWebkulPaymentCreditSystemConfigQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getWebkulPaymentCreditSystemConfigQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data, loading };
};

export default GetWebkulPaymentCreditSystemConfig;
