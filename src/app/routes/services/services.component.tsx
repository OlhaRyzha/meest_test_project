import ServicesMenu from "../../features/services/services-menu/services-menu.component";
import { ServicesRouteContainer } from "./services.styles";
import { ServicesContainer } from "../../features/navigation/nav-services/nav-services.styles";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <ServicesRouteContainer>
        <ServicesContainer isOpened={true}>
          <ServicesMenu />
        </ServicesContainer>
        <Outlet />
      </ServicesRouteContainer>      
    </>
  )
}

export default Services;