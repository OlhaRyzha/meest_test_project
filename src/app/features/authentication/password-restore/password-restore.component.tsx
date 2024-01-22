import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { HeaderMain, Link, TextBody } from "../../../common/typography/typography.styles";
import FormFieldText from "../../../common/form-field-text/form-field-text.component";
import Button from "../../../common/button/button.component";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";
import { PasswordRestoreContainer } from "./password-restore.styles";

const PasswordRestore = () => {
  const {
    userStore: { passwordResetProgress, resetPasswordStart },
    navStore: { setAuthTabIndex, togglePasswordResetFormShown },
  } = useStore();

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is incorrect")
      .required("Email is required."),
  });

  const handleFormSubmit = async (
    formValues: any,
    formikHelpers: FormikHelpers<{ email: string }>
  ) => {
    await resetPasswordStart(formValues.email);
    formikHelpers.resetForm();
  };

  let initialValues = {
    email: "",
  };

  function handleBackToSignIn(e: any): void {
    e.preventDefault();

    togglePasswordResetFormShown();
    setAuthTabIndex(0);
  }

  return (
    <PasswordRestoreContainer>
      <HeaderMain>Restore your password</HeaderMain>
      <TextBody>Enter your email to reset your password</TextBody>

      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, helpers) => handleFormSubmit(values, helpers)}>
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <FormFieldText
              name="email"
              placeholder="example@email.com"
              label="Email"
              tabIndex={1}
            />

            <Button
              isLoading={passwordResetProgress}
              disabled={isSubmitting || !dirty || !isValid}
              type="submit"
              tabIndex={2}>
              Request password reset
            </Button>
          </form>
        )}
      </Formik>
      <Link bold onClick={(e) => handleBackToSignIn(e)} href="">
        &larr; Return to Sign in page
      </Link>
    </PasswordRestoreContainer>
  );
};

export default observer(PasswordRestore);
