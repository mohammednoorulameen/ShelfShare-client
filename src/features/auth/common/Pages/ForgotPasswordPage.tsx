import React from 'react'
import ForgotPassword from '../components/ForgotPassword'
import { Formik } from 'formik'
import { ForgotValidationSchema } from '../components/Validations'
import { useVerifyForgotPassword } from '../api/CommonApi'
import toast from 'react-hot-toast'
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/app/constants/messages'
import { isAxiosError } from 'axios'

const ForgotPasswordPage: React.FC<{role : "user" | "vendor"}> = ({ role }) => {
   const { mutate } = useVerifyForgotPassword();


   
  //  const role: Role =
  //    assingRole === "user" ? Role.USER :
  //    assingRole === "vendor" ? Role.VENDOR :
  //    assingRole === "admin" ? Role.ADMIN :
  //    Role.USER;
   
     console.log(role)

  return (

    <Formik 
    initialValues={{email: ""}}
    validationSchema={ForgotValidationSchema}
    onSubmit={(values)=> 
      mutate({email:values.email, role},{
        onSuccess: (data)=>{
          toast.success(data?.message || SUCCESS_MESSAGES.RESET_LINK_SEND)
        },
        onError: (error) => {
              let message = ERROR_MESSAGES.SOMETHING_WENT_WRONG;
              if (isAxiosError(error)) {
                message = error.response?.data?.message || message;
              }
              toast.error(message);
            },
      })
    }
    >
        {/* <ForgotPassword type={role}/> */}
        <ForgotPassword type={role}/>
    </Formik>

  )
}

export default ForgotPasswordPage