import { ReactComponent as BrokenPCImage } from "../../assets/error-page-pc-image.svg";
import StatusPage from "../../common/status-page/status-page.component";

const ServerError = () => {
  return (
    <StatusPage title={"Server error page"} 
      bodyText={`The server is not ready to handle the request. It could be overloaded or down for maintenance.`}
      Image={BrokenPCImage} />
  )
}

export default ServerError;