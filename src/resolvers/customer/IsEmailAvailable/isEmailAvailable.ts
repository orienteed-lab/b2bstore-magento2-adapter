import { ClientProps } from 'src';
import { IsEmailAvailableQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './isEmailAvailable.gql';

const IsEmailAvailable =
    (clientProps: ClientProps) => (resolverProps: IsEmailAvailableQueryVariables) => {
        const { mergeOperations, useLazyQuery } = clientProps;

        const { isEmailAvailableQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const [runQuery, { data }] = useLazyQuery(isEmailAvailableQuery, {
            fetchPolicy: 'cache-and-network'
        });

        return { runQuery, data };
    };

export default IsEmailAvailable;
