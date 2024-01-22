import { useField, useFormikContext } from "formik";
import { TextFormError, TextLabel } from "../typography/typography.styles";
import { FieldContainer, InputContainer } from "../form-field-text/form-field-text.styles";
import { FieldPhoneContainer } from "./form-field-phone.styles";
import { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { parsePhoneNumber } from "react-phone-number-input";
import PhoneCodeDropdown, {
  CountryOption,
} from "./phone-code-dropdown/phone-code-dropdown.component";
import { countryInfoList } from "../../assets/data/countryInfo";

interface Props {
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
  tabIndex?: number;
  userCountryCode?: string; // user.phone_country_code e.g. 'UK', 'US', etc
  onCountryCodeChanged: (countryCode: string) => void;
}

export const getCountryName = (code: string) => {
  return countryInfoList.find(
    (info) => info.countryCode.toLocaleLowerCase() === code.toLocaleLowerCase()
  )?.countryName;
};

const fallbackCountryCode = "UA";

const FormFieldPhone = ({
  name,
  placeholder,
  label,
  type,
  tabIndex,
  userCountryCode,
  onCountryCodeChanged,
}: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const [selectedCountryCode, setCountryCode] = useState<string | undefined>(
    userCountryCode ?? fallbackCountryCode
  );
  // field.value is user.phone from API
  const [enteredText, setEnteredText] = useState("");

  const countryCodes = useMemo(() => getCountries(), []);

  // initial run when phone input should be filled with national part of user.phone (if provided)
  useEffect(() => {
    // field.value is user.phone from API
    const providedPhoneNumber = parsePhoneNumber("+" + field.value);

    if (providedPhoneNumber) {
      setFieldValue(name, providedPhoneNumber.nationalNumber);
      setEnteredText(providedPhoneNumber.nationalNumber);
    } else {
      setFieldValue(name, field.value);
      setEnteredText(field.value);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedCountryCode) {
      const enteredIntlPhone = `${getCountryCallingCode(selectedCountryCode as any)}${enteredText}`;
      setFieldValue(name, enteredIntlPhone);
      onCountryCodeChanged && onCountryCodeChanged(selectedCountryCode);
      // setFieldTouched(name, true, false);
    }
  }, [
    name,
    setFieldValue,
    enteredText,
    selectedCountryCode,
    onCountryCodeChanged,
    setFieldTouched,
  ]);

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    const enteredNationalPhone = e.target.value;
    setEnteredText(enteredNationalPhone);
  }

  const onCountryCodeSelected = (country: CountryOption) => {
    setCountryCode(country.countryCode);
  };

  return (
    <FieldContainer mb={"2.4rem"}>
      <InputContainer error={meta.touched && !!meta.error}>
        <TextLabel htmlFor={name}>{label}</TextLabel>
        <FieldPhoneContainer>
          <PhoneCodeDropdown
            selectedCountryCode={selectedCountryCode}
            onSelected={onCountryCodeSelected}
            items={countryCodes.map((countryCode) => ({
              countryName: getCountryName(countryCode) ?? "",
              unicodeFlag: getUnicodeFlagIcon(countryCode) ?? "",
              callingCode: getCountryCallingCode(countryCode) ?? "",
              countryCode: countryCode ?? "",
            }))}
          />
          <input
            tabIndex={tabIndex ?? -1}
            type={type}
            id={name}
            placeholder={placeholder}
            required
            {...field}
            formNoValidate={true}
            autoComplete="false"
            value={enteredText}
            onChange={(e) => onChangeHandler(e)}
          />
        </FieldPhoneContainer>
      </InputContainer>

      {meta.touched && !!meta.error && <TextFormError>{meta.error}</TextFormError>}
    </FieldContainer>
  );
};

export default FormFieldPhone;
