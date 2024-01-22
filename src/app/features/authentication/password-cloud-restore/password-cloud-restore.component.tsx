import { Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';
import { HeaderMain } from "../../../common/typography/typography.styles";
import Button from "../../../common/button/button.component";
import FormFieldPassword from "../../../common/form-field-password/form-field-password.component";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { AuthContainer } from "../../../routes/authorization/authorization.styles";
import { CloudPassRestoreContainer } from "./password-cloud-restore.styles";
import { useState } from "react";
import CloudRestorePasswordSuccess from "./password-restore-success.component";

interface Params {
  oobCode: string;
}

const CloudPasswordRestore = ({ oobCode }: Params) => {
  const { userStore: { passwordResetProgress, resetPasswordFinish } } = useStore();
  const [passowrdResetIsDone, setPasswordResetIsDone] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?!.*\s).{8,30}$/, 'Password is incorrect')
      .required('Password is required'),

    confirmPassword: Yup.string().test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
  })

  const handleFormSubmit = async (formValues: any, formikHelpers: FormikHelpers<any>) => {
    await resetPasswordFinish(oobCode, formValues.password);
    formikHelpers.resetForm();
    setPasswordResetIsDone(true);
  }

  if (passowrdResetIsDone) {
    return (<CloudRestorePasswordSuccess />)
  }

  let initialValues = {
    password: "",
    confirmPassword: "",
  }

  return (
    <AuthContainer>
      <CloudPassRestoreContainer>
        <HeaderMain>Restore Password</HeaderMain>

        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, helpers) => handleFormSubmit(values, helpers)}>
          {
            ({ handleSubmit, isValid, isSubmitting, dirty }) => (
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

                <FormFieldPassword
                  shouldValidatePassword
                  name='password'
                  placeholder='Enter your new passsord'
                  label="New password"
                  tabIndex={1} />

                <FormFieldPassword
                  name='confirmPassword'
                  placeholder='Repeat new password'
                  label="Repeat new password"
                  tabIndex={2} />

                <Button isLoading={passwordResetProgress} disabled={isSubmitting || !dirty || !isValid} type="submit" tabIndex={3}>Save</Button>
              </form>
            )
          }
        </Formik>
      </CloudPassRestoreContainer>
    </AuthContainer>
  )
}

export default observer(CloudPasswordRestore);