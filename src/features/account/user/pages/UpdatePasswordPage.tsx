import { Formik, type FormikHelpers } from 'formik';
import { UpdatePasswordSchema } from '../../Validation/Form.Validations';
import { useUpdatePassword } from '../api/userUpdatePasswordApi'
import UpdatePassword from '../components/UpdatePassword';
import toast from 'react-hot-toast';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/app/constants/messages';
import { isAxiosError } from 'axios';


const ChangePasswordPage = () => {
  const changePassword = useUpdatePassword()

  const initialValues = {
    oldPassword : "",
    newPassword : "",
    confirmPassword : ""
  };

  const handleSubmit = (values: typeof initialValues,   formikHelpers: FormikHelpers<typeof initialValues>) =>{
    console.log(values)
    changePassword.mutate({
      oldPassword : values.oldPassword,
      newPassword : values.newPassword,
    },
    {
      onSuccess: () =>{
        toast.success(SUCCESS_MESSAGES.PASSWORD_UPDATE_SUCCESS)
        formikHelpers.resetForm();
      },
        onError: (error) => {
          let message = ERROR_MESSAGES.SOMETHING_WENT_WRONG
          if (isAxiosError(error)) {
            message = error.response?.data?.message || message;
          }
          toast.error(message);
      }
    }
  )
  }
  return (
     <div className="max-w-xl mx-auto mt-10">
      <Formik
        initialValues={initialValues}
        validationSchema={UpdatePasswordSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <UpdatePassword
              formik={formik}
              loading={changePassword.isPending}
            />
          </form>
        )}
      </Formik>
        </div>
  )
}

export default ChangePasswordPage

