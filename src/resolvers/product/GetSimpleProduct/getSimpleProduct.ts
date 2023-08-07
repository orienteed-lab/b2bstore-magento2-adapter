import { ClientProps } from 'src';
import { GetSimpleProductQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getSimpleProduct.gql';

interface GetSimpleProductProps extends GetSimpleProductQueryVariables {
    includeProductAlert?: boolean;
    includeProductAttachment?: boolean;
}

const GetSimpleProduct =
    (clientProps: ClientProps) =>
    (resolverProps: GetSimpleProductProps = { sku: '', includeProductAlert: false, includeProductAttachment: false }) => {
        const { mergeOperations, useQuery } = clientProps;
        const { sku, includeProductAlert, includeProductAttachment } = resolverProps;

        const { getSimpleProductQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { data, loading, error } = useQuery(getSimpleProductQuery, {
            variables: {
                sku: sku,
                includeProductAlert,
                includeProductAttachment
            }
        });

        return { data, loading, error };
    };

export default GetSimpleProduct;
