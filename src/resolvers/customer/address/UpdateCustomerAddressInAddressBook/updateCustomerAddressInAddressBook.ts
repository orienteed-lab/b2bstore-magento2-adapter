import { ClientProps } from 'src';
import { UpdateCustomerAddressInAddressBookMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './updateCustomerAddressInAddressBook.gql';

interface UpdateCustomerAddressInAddressBookProps extends UpdateCustomerAddressInAddressBookMutationVariables {
    onSuccess?: any;
    hasOnSuccess: boolean;
}

const UpdateCustomerAddressInAddressBook =
    (clientProps: ClientProps) =>
    (resolverProps: UpdateCustomerAddressInAddressBookProps = { hasOnSuccess: false, addressId: 0, updated_address: {} }) => {
        const { mergeOperations, useMutation } = clientProps;
        const { hasOnSuccess } = resolverProps;

        const { updateCustomerAddressInAddressBookMutation } = mergeOperations(DEFAULT_OPERATIONS);

        if (hasOnSuccess) {
            const { onSuccess } = resolverProps;
            const [updateCustomerAddress, { error, loading }] = useMutation(updateCustomerAddressInAddressBookMutation, {
                onCompleted: () => {
                    onSuccess();
                }
            });

            return { updateCustomerAddress, error, loading };
        } else {
            const [updateCustomerAddress, { error, loading }] = useMutation(updateCustomerAddressInAddressBookMutation);

            return { updateCustomerAddress, error, loading };
        }
    };

export default UpdateCustomerAddressInAddressBook;
