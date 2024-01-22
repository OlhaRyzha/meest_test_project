import { PasswordValidatorContainer, ValidationMarker, ValidationMarkerContainer, ValidationOption } from "./password-validator.styles";

// validationLevel: from 0 - 5 (see related set const for detailed description)
interface ValidatorProps {
  validationErrorIndexes: number[];
}

const errorMessages = [
  "From 8 to 32 characters",
  "At least 1 digit",
  "At least 1 lowercase letter",
  "At least 1 uppercase letter",
  "At least 1 of [@$!%*#?&-]",
  "No whitespaces"
];

const PasswordValidator = ({ validationErrorIndexes }: ValidatorProps) => {
  return (
    <>
      <ValidationMarkerContainer>
        {errorMessages.map((_, i) => {
          return (<ValidationMarker key={i} valid={i < errorMessages.length - validationErrorIndexes.length} />);
        })}
      </ValidationMarkerContainer>
      <PasswordValidatorContainer>
        {errorMessages.map((errorMessage, i) => {
          return (<ValidationOption key={i} valid={!validationErrorIndexes.includes(i)}>{errorMessage}</ValidationOption>);
        })}
      </PasswordValidatorContainer>
    </>
  )
}

export default PasswordValidator;