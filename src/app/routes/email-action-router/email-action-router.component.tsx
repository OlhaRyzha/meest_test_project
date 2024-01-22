import { useSearchParams } from "react-router-dom";
import CloudPasswordRestore from "../../features/authentication/password-cloud-restore/password-cloud-restore.component";
import SignUpEmailSuccess from "../../features/authentication/sign-up/sign-up-email-success.component";

const EmailActionModes = {
  resetPassword: 'resetPassword',
  verifyEmail: 'verifyEmail'
}

const EmailActionRouter = () => {
  const [searchParams] = useSearchParams();

  const mode = searchParams.get('mode') ?? "";
  const oobCode = searchParams.get('oobCode') ?? "";

  switch (mode) {
    case EmailActionModes.resetPassword:
      return (<CloudPasswordRestore oobCode={oobCode} />)

    case EmailActionModes.verifyEmail:
      return (<SignUpEmailSuccess oobCode={oobCode} />)

    default:
      return (<></>);
  }
}

export default EmailActionRouter;