import { ClientProps } from 'src';
import { IsUserAuthedQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './isUserAuthed.gql';

const IsUserAuthed = (clientProps: ClientProps) => (resolverProps: IsUserAuthedQueryVariables) => {
    const { mergeOperations, useAwaitQuery } = clientProps;

    const { isUserAuthedQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const fetchIsUserAuthed = useAwaitQuery(isUserAuthedQuery);

    return { fetchIsUserAuthed };
};

export default IsUserAuthed;
