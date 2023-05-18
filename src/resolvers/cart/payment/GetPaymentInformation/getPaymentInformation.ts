import { ClientProps } from 'src';
import { GetPaymentInformationQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getPaymentInformation.gql';

const GetPaymentInformation = (clientProps: ClientProps) => (resolverProps: GetPaymentInformationQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getPaymentInformationQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getPaymentInformationQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !cartId,
        variables: { cartId }
    });

    return { data, loading };
};

export default GetPaymentInformation;
