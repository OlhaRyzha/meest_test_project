import styled, { css } from "styled-components";
import { Colors, TextButton, TextButtonThin } from "../typography/typography.styles";
import { SpinnerCircle } from "../spinner/spinner.styles";
import { ComponentPropsWithoutRef } from "react";
import { BaseMarginComponent } from "../../../global.styles";

interface Props extends ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  isLoading?: boolean;
  contentStyle?: 'normal' | 'thin';
}

export const BaseButton = styled(BaseMarginComponent('button'))<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  background-color: ${Colors.blue};
  color: white;

  ${({ contentStyle }) => contentStyle === 'thin' 
    ? css`${TextButtonThin}`
    : css`${TextButton}`}

  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all .2s;
  gap: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${Colors.blueLight3};
  }

  &:hover {
    background-color: ${Colors.blue4};
  }

  &:active {
    background-color: ${Colors.blue};
    outline: none;
    box-shadow: none;
  }

  ${({ disabled }) => disabled &&
    css`
      background-color: ${Colors.blueDisabled};
      pointer-events: none!important;
    `
  }

  ${({ isLoading }) => isLoading &&
    css`
      background-color: ${Colors.blue2};
      pointer-events: none!important;
    `
  }
`

export const NeutralButton = styled(BaseButton)`
  background-color: transparent;
  border: transparent;
  color: ${Colors.grayDark2};

  &:hover {
    background-color: ${Colors.grayDark2};
    color: ${Colors.white};
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.blue};
  color: ${Colors.blue};

  &:hover {
    background-color: ${Colors.blue};
    color: ${Colors.white};
  }
`

export const InvertedDangerButton = styled(BaseButton)`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.lightRed};
  color: ${Colors.lightRed};

  &:hover {
    background-color: ${Colors.lightRed};
    color: ${Colors.white};
  }

  &:focus {
    box-shadow: none;
  }
`

export const DangerButton = styled(BaseButton)`
  background-color: ${Colors.lightRed};    
  border: 1px solid ${Colors.lightRed};
  color: ${Colors.white};

  &:hover {
    background-color: ${Colors.white};
    border: 1px solid ${Colors.lightRed};
    color: ${Colors.lightRed};
  }
`

export const SocialSiginButton = styled(BaseButton)`
  padding: 8px 0;  
  border: 1px solid ${Colors.blue2};
  background-color: transparent;
  color: ${Colors.grayDark2};
  font-weight: 500;

  &:hover {
    background-color: ${Colors.blue2};
    color: ${Colors.white};
  }

  &:active {
    background-color: ${Colors.blue};
    border-color: ${Colors.blue};
  }
`

export const GoogleSigninButton = styled(SocialSiginButton)`
`

export const AppleSigninButton = styled(SocialSiginButton)`
`

export const ButtonSpinner = styled(SpinnerCircle)`
  width: 2rem;
  height: 2rem;
`;
