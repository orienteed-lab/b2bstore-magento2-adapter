import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getDefaultShipping.gql';

interface GetDefaultShippingProps {
    isSignedIn?: boolean;
}

const GetDefaultShipping =
    (clientProps: ClientProps) =>
    (resolverProps: GetDefaultShippingProps = { isSignedIn: false }) => {
        const { mergeOperations, useQuery } = clientProps;
        const { isSignedIn } = resolverProps;

        const { getDefaultShippingQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { data, loading } = useQuery(getDefaultShippingQuery, {
            skip: !isSignedIn
        });

        return { data, loading, getDefaultShippingQuery };
    };

export default GetDefaultShipping;
