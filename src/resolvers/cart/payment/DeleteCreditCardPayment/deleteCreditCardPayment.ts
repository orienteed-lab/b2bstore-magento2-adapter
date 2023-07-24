import { ClientProps } from 'src';
import { DeleteCreditCardPaymentMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './deleteCreditCardPayment.gql';

const DeleteCreditCardPayment = (clientProps: ClientProps) => (resolverProps: DeleteCreditCardPaymentMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { deleteCreditCardPaymentMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [deletePayment, { error, loading }] = useMutation(deleteCreditCardPaymentMutation);

    return { deletePayment, loading, error };
};

export default DeleteCreditCardPayment;
