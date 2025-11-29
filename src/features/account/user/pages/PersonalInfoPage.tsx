import { useState } from "react";
import { Formik } from "formik";
import { useAppSelector } from "@/app/hooks/useRedux";
import { PersonalInfoValidationSchema } from "../../Validation/Form.Validations";
import PersonalInfo from "../components/PersonalInfo";

const PersonalInfoPage = () => {
  const user = useAppSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    userName: user.userName ?? "",
    phoneNumber: user.phoneNumber ?? "",
    image: user.imagekey ?? null,
    imageFile: null as File | null,
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted:", values);
    setIsEditing(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PersonalInfoValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(formik) => (
        <PersonalInfo
          user={user}
          formik={formik}
          isEditing={isEditing}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </Formik>
  );
};

export default PersonalInfoPage;


// import { Formik } from 'formik'
// import PersonalInfo from '../components/PersonalInfo'
// import { useAppSelector } from '@/app/hooks/useRedux'
// import { PersonalInfoValidationSchema } from '../../Validation/Form.Validations'

// const PersonalInfoPage = () => {
//     const user = useAppSelector((state)=> state.auth)
//      const initialValues = {
//     userName: user.userName ?? "",
//     phoneNumber: user.phoneNumber ?? "",
//     image: user.imagekey ?? null,
//     imageFile: null as File | null, 
//   };


//     const handleSubmit = async (values: typeof initialValues) =>{ 
//         console.log(values)
//     }

//   return (
//     <div>

//       <Formik 
//       initialValues={initialValues}
//       validationSchema={PersonalInfoValidationSchema}
//       onSubmit={handleSubmit}
//       enableReinitialize
//       >
        
//        {(Formik)=> <PersonalInfo user={user} formik={Formik}/>}
//       </Formik>
//     </div>
//   )
// }

// export default PersonalInfoPage