import { ReactComponent as ComingSoonImg } from "../../assets/coming-soon-image.svg";
import StatusPage from "../../common/status-page/status-page.component";

const ComingSoon = () => {
  return (
    <StatusPage title={"Coming Soon..."} 
      bodyText={`We are currently working on our website.\nPlease check this page later.`}
      Image={ComingSoonImg} />
  )
}

export default ComingSoon;