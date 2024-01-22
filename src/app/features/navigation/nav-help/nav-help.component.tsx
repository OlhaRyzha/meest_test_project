import { ReactComponent as HelpIcon } from "../../../assets/questionmark-icon.svg";
import { NavBtn } from "../nav-btn/nav-btn.styles";
import { HelpNavButton } from "./nav-help.styles";

const NavHelp = () => {
  return (
    <HelpNavButton>
      <NavBtn>
        <HelpIcon />
      </NavBtn>
    </HelpNavButton>
  );
}

export default NavHelp;