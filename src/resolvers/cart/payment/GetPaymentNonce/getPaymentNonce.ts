import { ClientProps } from 'src';
import { GetPaymentNonceQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getPaymentNonce.gql';

const GetPaymentNonce = (clientProps: ClientProps) => (resolverProps: GetPaymentNonceQueryVariables) => {
    const { mergeOperations } = clientProps;

    const { getPaymentNonceQuery } = mergeOperations(DEFAULT_OPERATIONS);

    return { getPaymentNonceQuery };
};

export default GetPaymentNonce;
