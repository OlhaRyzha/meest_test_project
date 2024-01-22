import { useStore } from "../../../stores/store";
import { NavBtn } from "../nav-btn/nav-btn.styles";
import { UserNavContainer, UserAvatar, UserNavBtn, UserNavMobileContainer } from "./nav-user.styles";
import { TextNavMenu } from "../../../common/typography/typography.styles";
import { ReactComponent as ArrowDownIcon } from "../../../assets/arrow-down-icon.svg";
import { observer } from "mobx-react-lite";
import { forwardRef } from "react";
import NavUserMenu from "./nav-user-menu.component";
import BottomSidebar from "../../../common/sidebar-bottom/bottom-sidebar.component";
import { NavPopupContainer } from "../nav-popup/nav-popup.styles";
import withCloseOnOutsideClick, { WithCloseOnOutsideClickProps } from "../../../HOCs/withCloseOnOutsideClick.hoc";

const NavUser = ({isOpened, setIsOpened}: WithCloseOnOutsideClickProps, ref: any) => {
  
  const { userStore: { getInitials, getUserName }, navStore: { toggleBottomSidebar } } = useStore();
  
  return (
    <>
      <UserNavContainer ref={ref}>
        <UserNavBtn onClick={() => setIsOpened(!isOpened)}>
          <NavBtn>
            <UserAvatar>{getInitials()}</UserAvatar>
          </NavBtn>
          {getUserName() !== '' && <TextNavMenu color='nav'>{getUserName(false)}</TextNavMenu>}
          <ArrowDownIcon />
        </UserNavBtn>
        <NavPopupContainer isOpened={isOpened}>
          <NavUserMenu />
        </NavPopupContainer>
      </UserNavContainer>
      
      <UserNavMobileContainer>
        <NavBtn onClick={() => toggleBottomSidebar()}>
          <UserAvatar>{getInitials()}</UserAvatar>
        </NavBtn>
        <BottomSidebar withBlurredBackground={true}>
          <NavUserMenu />
        </BottomSidebar>
      </UserNavMobileContainer>
    </>
  );
}

export default withCloseOnOutsideClick(observer(forwardRef(NavUser)));