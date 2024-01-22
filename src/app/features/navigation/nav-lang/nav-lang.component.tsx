import { TextNavMenu } from "../../../common/typography/typography.styles";
import { ReactComponent as GlobusIcon } from "../../../assets/globus-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/arrow-down-icon.svg";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { NavBtn } from "../nav-btn/nav-btn.styles";
import withCloseOnOutsideClick, { WithCloseOnOutsideClickProps } from "../../../HOCs/withCloseOnOutsideClick.hoc";
import { NavPopupContainer, NavPopupItem } from "../nav-popup/nav-popup.styles";
import { forwardRef } from "react";
import { NavLangButton, NavLangContainer } from "./nav-lang.styles";

const NavLangPopup = ({isOpened, setIsOpened}: WithCloseOnOutsideClickProps, ref: any) => {

  const { localizationsStore: { availableLocalizations, selectedLocalization, selectLocalization } } = useStore();

  return (
    <NavLangContainer ref={ref}>
      <NavLangButton onClick={() => setIsOpened(!isOpened)}>
        <NavBtn>
          <GlobusIcon />
        </NavBtn>
        <TextNavMenu>{selectedLocalization.code.toLocaleUpperCase()}</TextNavMenu>
        <ArrowDownIcon />
      </NavLangButton>
      <NavPopupContainer isOpened={isOpened}>
        {availableLocalizations.map((l, i) => 
          <NavPopupItem 
            onClick={() => selectLocalization(i)}
            key={l.code}
            isSelected={selectedLocalization.code === l.code}>
              {l.code.toLocaleUpperCase()} - {l.languageLabel}
          </NavPopupItem>)}
      </NavPopupContainer>
    </NavLangContainer>
  );
}

export default withCloseOnOutsideClick(observer(forwardRef(NavLangPopup)));