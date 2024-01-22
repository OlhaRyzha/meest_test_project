import { useField } from "formik";
import { TextFormError, TextLabel } from "../typography/typography.styles";
import { InputContainer, FieldContainer } from "./form-field-text.styles";
import { v4 } from 'uuid';

interface Props {
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
  tabIndex?: number;
}

const FormFieldText = ({ name, placeholder, label, type, tabIndex }: Props) => {
  const [field, meta] = useField(name);

  const uuid = v4();

  return (
    <FieldContainer mb={"2.4rem"}>
      <InputContainer error={meta.touched && !!meta.error}>
        <TextLabel htmlFor={name + uuid}>{label}</TextLabel>
        <input
          tabIndex={tabIndex ?? -1}
          type={type}
          id={name + uuid}
          placeholder={placeholder}
          required
          {...field}
          formNoValidate={true}
        />
        {/* <IconsContainer>
          {meta.touched && !!meta.error && <ErrorIcon />}
        </IconsContainer> */}
      </InputContainer>

      {meta.touched && !!meta.error &&
        (<TextFormError>{meta.error}</TextFormError>)}

    </FieldContainer>
  )
}

export default FormFieldText;
