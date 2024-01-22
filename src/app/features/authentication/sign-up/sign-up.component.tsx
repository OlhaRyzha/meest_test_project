import { Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';
import { HeaderMain, LinkSmall } from "../../../common/typography/typography.styles";
import FormFieldText from "../../../common/form-field-text/form-field-text.component";
import Checkbox from "../../../common/checkbox/checkbox.component";
import Button from "../../../common/button/button.component";
import FormFieldPassword from "../../../common/form-field-password/form-field-password.component";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  termsOfUse: boolean;
  newsSubscription: boolean;
}

const SignUp = () => {

  const { userStore: { signUp, signUpInProgress } } = useStore();

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is incorrect')
      .required('Email is required.'),

    password: Yup.string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&-])(?!.*\s).{8,30}$/, 'Password is incorrect')
      .required('Password is required'),

    confirmPassword: Yup.string().test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),

    termsOfUse: Yup.boolean().oneOf([true]),
  })

  const handleFormSubmit = async (formValues: any, formikHelpers: FormikHelpers<SignUpFormValues>) => {
    await signUp(formValues.email, formValues.password);
    formikHelpers.resetForm();
  }

  let initialValues: SignUpFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
    termsOfUse: false,
    newsSubscription: false
  }

  return (
    <>
      <HeaderMain>Sign Up</HeaderMain>

      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, helpers) => handleFormSubmit(values, helpers)}>
        {
          ({ handleSubmit, isValid, isSubmitting, dirty, setFieldValue }) => (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <FormFieldText name='email'
                placeholder='example@email.com'
                label="Enter your email"
                tabIndex={1} />

              <FormFieldPassword
                shouldValidatePassword
                name='password'
                placeholder='Enter your passsord'
                label="Create your password"
                tabIndex={2} />

              <FormFieldPassword
                name='confirmPassword'
                placeholder='Repeat your password'
                label="Repeat the password"
                tabIndex={3} />

              <Checkbox name="termsOfUse" tabIndex={4} onChecked={setFieldValue}>
                By registering, you agree that you have read and accepted our <LinkSmall href="https://www.mymeest.ca/StaticContent/Terms.htm">terms of use of the service</LinkSmall> and confirm that you are familiar with the <LinkSmall href="https://ca.meest.com/conditions-of-carriage">delivery rules</LinkSmall> and the <LinkSmall href="https://ca.meest.com/ca-important-information-restricted-air-freight">list of prohibited items</LinkSmall>
              </Checkbox>

              <Checkbox name="newsSubscription" tabIndex={5} onChecked={setFieldValue}>
                I want to receive information about offers, promotions and extra services by email or phone.
              </Checkbox>

              <Button isLoading={signUpInProgress} disabled={isSubmitting || !dirty || !isValid} type="submit" tabIndex={6}>Create an account</Button>
            </form>
          )
        }
      </Formik>
    </>
  )
}

export default observer(SignUp);