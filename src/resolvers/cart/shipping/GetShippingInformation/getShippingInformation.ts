import { ClientProps } from 'src';
import { GetShippingInformationQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getShippingInformation.gql';

const GetShippingInformation = (clientProps: ClientProps) => (resolverProps: GetShippingInformationQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getShippingInformationQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getShippingInformationQuery, {
        skip: !cartId,
        variables: {
            cartId
        }
    });

    return { data, loading };
};

export default GetShippingInformation;
