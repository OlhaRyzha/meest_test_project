import { observer } from "mobx-react-lite";
import { HeaderMain, Link, TextBody } from "../../../common/typography/typography.styles";
import { AuthMessegeScreen } from "../auth-messege-screen/auth-messege-screen.styles";
import { AuthContainer } from "../../../routes/authorization/authorization.styles";
import { ReactComponent as SuccessIcon } from "../../../assets/success-mark-icon.svg";

const CloudRestorePasswordSuccess = () => {
  return (
    <AuthContainer>
      <AuthMessegeScreen>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SuccessIcon style={{ marginBottom: '2.4rem' }} />
        </div>
        <HeaderMain style={{ textAlign: "center", marginBottom: '8px' }}>Password changed!</HeaderMain>
        <TextBody>You can now log in to your account using your new password.</TextBody>
        <Link bold href="/auth">&larr; Return to Sign in page</Link>
      </AuthMessegeScreen>
    </AuthContainer>
  )
}

export default observer(CloudRestorePasswordSuccess);