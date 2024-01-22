import {
  AppleSigninButton,
  BaseButton,
  NeutralButton,
  ButtonSpinner,
  GoogleSigninButton,
  InvertedButton,
  InvertedDangerButton,
  DangerButton
} from "./button.styles";
import { MarginProps } from "../../../global.styles";
import { ReactComponent as GoogleIcon } from "../../assets/google-icon.svg";
import { ReactComponent as AppleIcon } from "../../assets/apple-icon.svg";

export enum BUTTON_TYPES {
  base = "base",
  inverted = "inverted",
  neutral = "neutral",
  inverted_danger = "inverted_danger",
  danger = "danger",
  google = "google",
  apple = "apple",
};

interface Props {
  content?: any;
  contentStyle?: 'normal' | 'thin';
  isLoading?: boolean;
  buttonType?: BUTTON_TYPES;
  children?: any;
  tabIndex?: number;
  disabled?: boolean;
  type?: any;
  onClick?: any;
  id?: string;
}

const getButton = (type = BUTTON_TYPES.base): typeof BaseButton =>
({
  [BUTTON_TYPES.base]: BaseButton,
  [BUTTON_TYPES.inverted]: InvertedButton,
  [BUTTON_TYPES.neutral]: NeutralButton,
  [BUTTON_TYPES.inverted_danger]: InvertedDangerButton,
  [BUTTON_TYPES.danger]: DangerButton,
  [BUTTON_TYPES.google]: GoogleSigninButton,
  [BUTTON_TYPES.apple]: AppleSigninButton,
}[type]);

const Button = ({ content, isLoading, buttonType, children, type, tabIndex, disabled, onClick, contentStyle, id, mr, ml, mt, mb }: Props & MarginProps) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton isLoading={isLoading} 
      type={type} 
      tabIndex={tabIndex} 
      disabled={disabled} 
      onClick={onClick} 
      contentStyle={contentStyle} 
      id={id} 
      mr={mr} mb={mb} mt={mt} ml={ml}>
      {!isLoading && buttonType === BUTTON_TYPES.google && <GoogleIcon />}
      {!isLoading && buttonType === BUTTON_TYPES.apple && <AppleIcon />}
      {isLoading
        ? <ButtonSpinner />
        : content ? content : children
      }
    </CustomButton>
  )
}

export default Button;
