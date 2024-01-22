import { Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';
import { HeaderMain } from "../../../common/typography/typography.styles";
import FormFieldText from "../../../common/form-field-text/form-field-text.component";
import Button, { BUTTON_TYPES } from "../../../common/button/button.component";
import FormFieldPassword from "../../../common/form-field-password/form-field-password.component";
import { observer } from "mobx-react-lite";
import { SignInContainer } from "./sign-in.styles.component";
import Separator from "../../../common/separator/separator.component";
import { useStore } from "../../../stores/store";
import { useTranslation } from "react-i18next";


interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const { userStore: {
    emailSignInProgress,
    googleSignInProgress,
    appleSignInProgress,
    googleLogin,
    appleLogin,
    emailLogin } } = useStore();

  const {t} = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is incorrect')
      .required('Email is required.'),

    password: Yup.string()
      .required('Password is required')
  })

  const handleFormSubmit = async (formValues: any, formikHelpers: FormikHelpers<SignInFormValues>) => {
    await emailLogin(formValues.email, formValues.password);
    formikHelpers.resetForm();
  }

  let initialValues: SignInFormValues = {
    email: "",
    password: ""
  }

  return (
    <SignInContainer>
      <HeaderMain>{t("Let's let you in")}</HeaderMain>

      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, helpers) => handleFormSubmit(values, helpers)}>
        {
          ({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <FormFieldText name='email'
                placeholder='example@email.com'
                label="Email"
                tabIndex={1} />

              <FormFieldPassword
                name='password'
                forgotPassword
                placeholder='Enter your password'
                label='Password'
                tabIndex={2} />

              <Button isLoading={emailSignInProgress} disabled={isSubmitting || !dirty || !isValid} type="submit" tabIndex={3}>Sign In</Button>
            </form>
          )
        }
      </Formik>

      <Separator content="or" />

      <Button isLoading={googleSignInProgress} buttonType={BUTTON_TYPES.google} onClick={() => googleLogin()} tabIndex={4}>Continue with Google</Button>
      <Button isLoading={appleSignInProgress} buttonType={BUTTON_TYPES.apple} onClick={() => appleLogin()} tabIndex={5}>Continue with Apple</Button>


    </SignInContainer>
  )
}

export default observer(SignIn);