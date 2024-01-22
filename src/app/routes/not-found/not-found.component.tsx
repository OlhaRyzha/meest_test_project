import { ReactComponent as BoxImage } from "../../assets/box-big-image.svg";
import StatusPage from "../../common/status-page/status-page.component";

const NotFound = () => {
  return (
    <StatusPage title={"Page not found"} 
      bodyText={`The page you’re looking for isn’t available or doesn’t exist.\nBack to the Homepage or Contact your personal assistant.`}
      Image={BoxImage} 
      showSupportButton={true}/>
  )
}

export default NotFound;