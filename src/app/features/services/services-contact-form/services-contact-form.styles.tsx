import styled, { css } from "styled-components";
import { TextFormError } from "../../../common/typography/typography.styles";
import errorIcon from "../../../assets/error-icon.svg";
import { InputContainer } from "../../../common/form-field-text/form-field-text.styles";
import { BaseButton, InvertedButton } from "../../../common/button/button.styles";

const baseButtonStyles = css`
  width: 17rem;
  margin-top: 3rem;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    flex-direction: row;
    min-width: auto;
    flex-wrap: wrap;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  width: 50%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const InputWrapForContact = styled(InputContainer)`
  display: flex;
  gap: 2rem;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const FormButton = styled(BaseButton)`
  ${baseButtonStyles}
`;

export const CancelButton = styled(InvertedButton)`
  ${baseButtonStyles}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;

  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ErrorTextInForm = styled(TextFormError)`
  display: inline-block;
  margin-top: 0.8rem;
  padding-left: 2.4rem;
  background: url(${errorIcon}) no-repeat left padding-box;
`;
