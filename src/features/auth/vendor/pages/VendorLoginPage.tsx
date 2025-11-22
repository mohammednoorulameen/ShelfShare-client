import { Formik } from 'formik'
import React from 'react'
import LoginForm from '../../common/components/LoginForm'
import { LoginValidationSchema } from '../../common/components/Validations'

const VendorLoginPage = () => {
  return (
    <div>
        <Formik 
        initialValues={{email:"", password:""}}
         validationSchema={LoginValidationSchema}
        onSubmit={(values)=> console.log('vendor', values)}
        >
            <LoginForm type='vendor'/>
        </Formik>
    </div>
  )
}

export default VendorLoginPage