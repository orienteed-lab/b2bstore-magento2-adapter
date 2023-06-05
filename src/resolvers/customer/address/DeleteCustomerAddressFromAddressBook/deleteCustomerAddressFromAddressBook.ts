import { ClientProps } from 'src';
import { DeleteCustomerAddressFromAddressBookMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './deleteCustomerAddressFromAddressBook.gql';

const DeleteCustomerAddressFromAddressBook =
    (clientProps: ClientProps) => (resolverProps: DeleteCustomerAddressFromAddressBookMutationVariables) => {
        const { mergeOperations, useMutation } = clientProps;

        const { deleteCustomerAddressFromAddressBookMutation } = mergeOperations(DEFAULT_OPERATIONS);

        const [deleteCustomerAddress, { loading }] = useMutation(deleteCustomerAddressFromAddressBookMutation);

        return { deleteCustomerAddress, loading };
    };

export default DeleteCustomerAddressFromAddressBook;
