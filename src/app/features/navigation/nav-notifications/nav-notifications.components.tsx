import { ReactComponent as BellIcon } from "../../../assets/notifications-bell-icon.svg";
import { ReactComponent as BellIconAlert } from "../../../assets/notifications-bell-icon-alert.svg";
import { useStore } from "../../../stores/store";
import { NavBtn } from "../nav-btn/nav-btn.styles";

const NavNotifications = () => {
  const { notificationsStore: { countNotifications } } = useStore();

  return (
    <NavBtn>
      { countNotifications > 0 ? <BellIconAlert /> : <BellIcon /> }
    </NavBtn>
  )
}

export default NavNotifications;