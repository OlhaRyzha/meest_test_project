import { useStore } from "../../../stores/store";
import { ContactContainer, ServicesUserAvatar, ServicesUserInfoContainer, ServicesUserName } from "./services-user-info.styles";
import { ReactComponent as CopyIcon } from "../../../assets/copy-icon.svg";
import { TextServicesContact } from "../../../common/typography/typography.styles";
import { observer } from "mobx-react-lite";

const ServicesUserInfo = () => {

  const { userStore: { user, getInitials, getUserName }, commonStore: { toastInfo }} = useStore();

  const copyClickHandler = () => {
    const userInfo: string[] = [];
    userInfo.push(getUserName(true));
    userInfo.push(user?.phone?.phone_number ? "+" + user.phone?.phone_number : "");
    userInfo.push(user?.email ?? "");
    const userInfoString = userInfo.filter(i => i !== "").join('\n');

    navigator.clipboard.writeText(userInfoString);

    toastInfo("User info copied");
  }

  if (!user) return null;

  return (
    <ServicesUserInfoContainer>
      <ServicesUserAvatar>{getInitials()}</ServicesUserAvatar>
      {getUserName() !== '' 
        ? <ServicesUserName>{getUserName(true)} <CopyIcon onClick={() => copyClickHandler()} /></ServicesUserName>
        : <CopyIcon onClick={() => copyClickHandler()} />}
      <ContactContainer>
        {user?.email && <TextServicesContact>{user?.email}</TextServicesContact>}
        {user?.phone && <TextServicesContact>+{user?.phone.phone_number}</TextServicesContact>}
      </ContactContainer>
    </ServicesUserInfoContainer>
  )
}

export default observer(ServicesUserInfo);