import React from "react";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormFieldPhone from "../../../common/form-field-phone/form-field-phone.component";
import {
  ButtonContainer,
  CancelButton,
  ErrorTextInForm,
  FormButton,
  FormContainer,
  FormGroup,
  InputWrapForContact,
} from "./services-contact-form.styles";
import { store, useStore } from "../../../stores/store";
import { TextLabel } from "../../../common/typography/typography.styles";
import { FieldPhoneContainer } from "../../../common/form-field-phone/form-field-phone.styles";

export const LOCAL_KEY = "country_code";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\d{6,14}$/, {
      message: "Invalid phone",
      excludeEmptyString: true,
    })
    .required("This field cannot be empty"),
  email: Yup.string().email("Enter a valid email address").required("This field cannot be empty"),
});

interface YourFormProps {
  onFormSubmit: () => void;
  onUpdateStatus: (newStatus: boolean) => void;
}

const YourForm: React.FC<YourFormProps> = observer(({ onFormSubmit, onUpdateStatus }) => {
  const {
    userStore: { user, updateContactInfo },
    commonStore,
  } = useStore();

  const chozenCountryCode = JSON.parse(localStorage.getItem(LOCAL_KEY) || '""');

  const handleFormChange = (newCountryCode: string) => {
    if (newCountryCode === chozenCountryCode) {
      return;
    }
    commonStore.setCountryCode(newCountryCode);
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: user?.phone?.phone_number || "",
        email: user?.email || "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          await updateContactInfo(values.email, String(values.phoneNumber), chozenCountryCode);
          onFormSubmit();
          resetForm();
        } catch (error: any) {
          if (
            axios.isAxiosError(error) &&
            error.response &&
            error.response.status === 422 &&
            error.response.data?.message === "Email is already taken"
          ) {
            store.commonStore.toastError("Email is already taken");
          } else {
            console.error(error);
          }
        }
      }}>
      {({ isValid, dirty, touched }) => (
        <Form>
          <FormContainer>
            <InputWrapForContact error={!isValid && !!touched.email}>
              <FormGroup>
                <TextLabel htmlFor="email">Email</TextLabel>
                <FieldPhoneContainer>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </FieldPhoneContainer>
                {touched.email ? <ErrorMessage name="email" component={ErrorTextInForm} /> : null}
              </FormGroup>

              <FormGroup>
                <FormFieldPhone
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  label="Phone Number"
                  onCountryCodeChanged={handleFormChange}
                />
              </FormGroup>
            </InputWrapForContact>

            <ButtonContainer>
              <CancelButton type="button" onClick={() => onUpdateStatus(false)}>
                Cancel
              </CancelButton>
              <FormButton disabled={!isValid || !dirty} type="submit">
                Save changed
              </FormButton>
            </ButtonContainer>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
});

export default YourForm;
