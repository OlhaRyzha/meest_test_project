import { useNavigate } from "react-router-dom";
import { useStore } from "../../../stores/store";
import ServicesMenuItem from "../../services/services-menu-item/services-menu-item.component";
import ServicesUserInfo from "../../services/services-user-info/services-user-info.component";

const NavUserMenu = () => {

  const { 
    userStore: { logout }, 
    navStore: { setServicesOpened, openMenuSection, isBottomSidebarOpened, toggleBottomSidebar, toggleLeftSidebar} 
  } = useStore();

  const navigate = useNavigate();

  const onMenuItemClicked = (menuIndex: number, ) => {
    setServicesOpened(true);
    toggleLeftSidebar();
    openMenuSection(menuIndex);
    if (isBottomSidebarOpened) {
      toggleBottomSidebar();
    }
    navigate('/services') 
  }

  return (
    <>
      <ServicesUserInfo />
      <ServicesMenuItem key={0} content="Shipments" icon="package" onClick={() => onMenuItemClicked(0)} />
      <ServicesMenuItem key={1} content="Account settings" icon="user" onClick={() => onMenuItemClicked(1)} />
      <ServicesMenuItem key={2} content="PUDO" icon="package" onClick={() => onMenuItemClicked(2)} />
      <ServicesMenuItem key={3} content="Bonuses" icon="package" onClick={() => onMenuItemClicked(3)} />
      <ServicesMenuItem key={4} content="Leave Feedback" icon="package" />
      <ServicesMenuItem key={5} content="Logout" icon="logout" onClick={async () => await logout()}  />
    </>
  )
}

export default NavUserMenu;