import { TextCheckbox } from "../typography/typography.styles";
import { CheckboxContainer, CheckboxWrapper } from "./checkbox.styles";
import { ReactComponent as CheckboxIcon } from "../../assets/checkbox-icon.svg";
import { useField } from "formik";
import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
import { v4 } from "uuid";

const Checkbox = ({ name, children, tabIndex, onChecked }: any) => {
  const [field] = useField(name);
  const [checked, setChecked] = useState(false);

  const uuid = v4();

  const keyboardHandler: KeyboardEventHandler<HTMLSpanElement> = async (e) => {
    if (e.key === " " || e.key === "Enter") {
      await onChecked(name, !checked, true);
      setChecked(!checked);
    }
  }

  const clickHandler: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.preventDefault();

    // field: string, value: any, shouldValidate?: boolean | undefined
    await onChecked(name, !checked, true);
    setChecked(!checked);
  }


  return (
    <CheckboxWrapper>
      <CheckboxContainer onKeyDown={keyboardHandler}>
        <input id={name + uuid} {...field} type="checkbox" checked={checked} />
        <span tabIndex={tabIndex ?? -1} onClick={clickHandler}><CheckboxIcon /></span>
      </CheckboxContainer>
      {children && <TextCheckbox>{children}</TextCheckbox>}
    </CheckboxWrapper>
  )
}

export default Checkbox;