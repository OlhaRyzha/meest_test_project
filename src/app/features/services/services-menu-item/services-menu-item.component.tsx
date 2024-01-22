import { ReactComponent as PackageIcon } from "../../../assets/package-icon.svg";
import { ReactComponent as UserIcon } from "../../../assets/user-icon.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/logout-icon.svg";
import { TextServicesMenu } from "../../../common/typography/typography.styles";
import { ServicesMenuItemContainer } from "./services-menu-item.styles";

interface Props {
  content: string;
  icon?: "package" | "user" | "logout";
  onClick?: any;
}

const ServicesMenuItem = ({content, icon, onClick}: Props) => {
  return (
    <ServicesMenuItemContainer onClick={onClick} iconColor={icon === 'logout' ? 'red' : 'gray'}>
      {icon === 'package' && <PackageIcon />}
      {icon === 'user' && <UserIcon />}
      {icon === 'logout' && <LogoutIcon />}
      <TextServicesMenu color={icon === 'logout' ? 'red' : 'gray'}>{content}</TextServicesMenu>
    </ServicesMenuItemContainer>
  )
}

export default ServicesMenuItem;