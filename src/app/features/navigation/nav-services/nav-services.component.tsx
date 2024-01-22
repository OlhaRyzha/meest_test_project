import { ServicesNavContainer, ServicesNavButton, ServicesNavMobileContainer } from "./nav-services.styles"
import { ReactComponent as PackageIcon } from "../../../assets/package-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/arrow-down-icon.svg";
import { ReactComponent as MenuIcon } from "../../../assets/menu-hamburger-icon.svg";
import { TextNavMenu } from "../../../common/typography/typography.styles";
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import { NavBtn } from "../nav-btn/nav-btn.styles";
import { useStore } from "../../../stores/store";
import { useLocation, useNavigate } from "react-router-dom";


const NavServices = () => {

  const { navStore: { toggleLeftSidebar, isServicesOpened, setServicesOpened } } = useStore();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const loc = useLocation();

  return (
    <>
      <ServicesNavContainer>
        <ServicesNavButton onClick={() => { 
            setServicesOpened(!isServicesOpened); 
            if (loc.pathname !== '/services') {
              navigate('/services') 
            } else {
              navigate('/');
            }
          }}>
          <NavBtn>
            <PackageIcon/>
          </NavBtn>
          <TextNavMenu color='nav'>{t("Services")}</TextNavMenu>
          <ArrowDownIcon />
        </ServicesNavButton>
      </ServicesNavContainer>
      <ServicesNavMobileContainer>
        <NavBtn>
          <MenuIcon onClick={() => {
            toggleLeftSidebar();
            navigate('/services') 
          }}/>
        </NavBtn>
      </ServicesNavMobileContainer>
    </>
  );
}

export default observer(NavServices);