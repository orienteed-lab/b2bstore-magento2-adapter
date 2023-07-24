import { ClientProps } from 'src';
import { AddNewCustomerAddressToAddressBookMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addNewCustomerAddressToAddressBook.gql';

interface AddNewCustomerAddressToAddressBookProps extends AddNewCustomerAddressToAddressBookMutationVariables {
    onSuccess?: any;
    hasOnSuccess: boolean;
}

const AddNewCustomerAddressToAddressBook = (clientProps: ClientProps) => (resolverProps: AddNewCustomerAddressToAddressBookProps) => {
    const { mergeOperations, useMutation } = clientProps;
    const { hasOnSuccess } = resolverProps;

    const { addNewCustomerAddressToAddressBookMutation } = mergeOperations(DEFAULT_OPERATIONS);

    if (hasOnSuccess) {
        const { onSuccess } = resolverProps;

        const [createCustomerAddress, { error, loading }] = useMutation(addNewCustomerAddressToAddressBookMutation, {
            onCompleted: () => {
                onSuccess();
            }
        });

        return { createCustomerAddress, error, loading };
    } else {
        const [createCustomerAddress, { error, loading }] = useMutation(addNewCustomerAddressToAddressBookMutation);

        return { createCustomerAddress, error, loading };
    }
};

export default AddNewCustomerAddressToAddressBook;
