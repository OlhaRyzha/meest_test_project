import { TextLabel } from "../typography/typography.styles";
import { InputContainer } from "../form-field-text/form-field-text.styles";
import { ReactComponent as SearchIcon } from "../../assets/magnifying-glass-icon.svg";
import { v4 } from 'uuid';
import { InputSearchContainer, SearchIconContainer } from "./input-search.styles";
import { CSSProperties, useEffect, useRef } from "react";

interface Props {
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
  tabIndex?: number;
  focusOnOpen?: boolean;
  onChange?: (value: string) => void;

  disabled?: boolean;
  disableSearchIconHover?: boolean;
  inputStyle?: CSSProperties;
  isError?: boolean;
  readOnly?: boolean;
  inputValue?: string | number | readonly string[];
  autoComplete?: "off" | string;
  searchIconPosition?: 'left' | 'right';
  treatWholeInputAsSearch?: boolean;
  onInputContainerClick?: () => void;
  onSearchIconClick?: () => void;
  onInputClick?: () => void;
  onBlur?: () => void;
}

const InputSearch = ({ name, 
  inputValue,
  placeholder, 
  label, 
  disabled,
  type, 
  tabIndex, 
  focusOnOpen, 
  inputStyle,
  isError,
  readOnly,
  autoComplete,
  searchIconPosition,
  disableSearchIconHover,
  treatWholeInputAsSearch,
  onInputContainerClick,
  onSearchIconClick,
  onInputClick,
  onBlur, 
  onChange }: Props) => { 

  const uuid = v4();
  const inputRef = useRef(null);
  
  useEffect(() => {
    // Set focus on the input element when the component mounts
    focusOnOpen && inputRef && inputRef.current && (inputRef.current as any).focus();
  }, [focusOnOpen]);
  
  const onChangeHandler = (e: any) => {
    onChange && onChange(e.target.value);
  }
  
  return (
    <InputSearchContainer isDisabled={disabled} treatWholeInputAsSearch={treatWholeInputAsSearch} hIconPosition={searchIconPosition === 'right' ? 'right' : 'left'}>
      <InputContainer error={!!isError} onClick={ () => onInputContainerClick && onInputContainerClick() }>
        <SearchIconContainer isDisabled={disabled}
          disableSearchHover={ disableSearchIconHover } 
          onClick={ () => onSearchIconClick && onSearchIconClick() }>
          <SearchIcon />
        </SearchIconContainer>
        {label && <TextLabel htmlFor={name + uuid}>{label}</TextLabel>}
        <input
          disabled={disabled}
          value={inputValue}
          style={inputStyle}
          ref={inputRef}
          onChange={onChangeHandler}
          onClick={() => onInputClick && onInputClick()}
          onBlur={() => onBlur && onBlur()}
          tabIndex={tabIndex ?? -1}
          type={type}
          id={name + uuid}
          placeholder={placeholder}
          readOnly={readOnly}
          required
          formNoValidate={true}
          autoComplete={autoComplete}
        />
      </InputContainer>
    </InputSearchContainer>
  )
}

export default InputSearch;
