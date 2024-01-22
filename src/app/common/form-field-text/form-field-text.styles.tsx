import styled, { css } from "styled-components";
import {
  Colors,
  TextInput,
  TextInputPlaceholder,
  TextFormError,
  TextLabel,
} from "../typography/typography.styles";
import errorIcon from "../../assets/error-icon.svg";
import showPassIcon from "../../assets/pass-show-icon.svg";
import hidePassIcon from "../../assets/pass-hide-icon.svg";

interface FieldProps {
  error: boolean;
}

interface FieldContainerProps {
  mb?: string;
}
export const FieldContainer = styled.div<FieldContainerProps>`
  width: 100%;

  ${TextFormError} {
    display: inline-block;
    margin-top: 0.8rem;
    margin-left: 2px;
    padding-left: 2.4rem;
    background: url(${errorIcon}) no-repeat left padding-box;
  }
`;

export const InputContainer = styled.div<FieldProps>`
  position: relative;

  input {
    width: 100%;
    border: 1px solid ${Colors.grayLight3};
    border-radius: 10px;
    padding: 1rem 1.6rem;
    outline: none;
    transition: border 0.2s;
    font-family: inherit;
    ${TextInput}

    ${({ error }) =>
      error &&
      css`
        border-color: ${Colors.red};
      `}

    &::placeholder {
      ${TextInputPlaceholder}
    }

    &:focus {
      border: 1px solid ${Colors.blue4};
    }
  }

  ${TextLabel} {
    position: relative;
    display: inline-block;
    margin-bottom: 6px;
  }
`;
interface PassToggleProps {
  type: "show" | "hide";
}

export const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(40%);
`;

export const ErrorIcon = styled.span`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: url(${errorIcon}) no-repeat content-box;
`;

export const PassVisibilityIcon = styled.span<PassToggleProps>`
  display: inline-block;
  cursor: pointer;
  width: 1.6rem;
  height: 1.6rem;
  ${({ type }) =>
    type === "show"
      ? `background: url(${showPassIcon}) no-repeat right content-box;`
      : `background: url(${hidePassIcon}) no-repeat right content-box;`}
  transition: background .2s;
`;
