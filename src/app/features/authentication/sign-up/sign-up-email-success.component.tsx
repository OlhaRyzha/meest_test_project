import { observer } from "mobx-react-lite";
import { HeaderMain, Link, TextBody } from "../../../common/typography/typography.styles";
import { AuthMessegeScreen } from "../auth-messege-screen/auth-messege-screen.styles";
import { AuthContainer } from "../../../routes/authorization/authorization.styles";
import { ReactComponent as SuccessIcon } from "../../../assets/success-mark-icon.svg";
import { useEffect } from "react";
import { useStore } from "../../../stores/store";
import Spinner from "../../../common/spinner/spinner.component";

interface Params {
  oobCode: string;
}

const SignUpEmailSuccess = ({ oobCode }: Params) => {

  const { userStore: { signUpFinishEmailVerification, emailVerificationProgress } } = useStore();

  useEffect(() => {
    signUpFinishEmailVerification(oobCode);
  }, [oobCode, signUpFinishEmailVerification]);

  if (emailVerificationProgress)
    return (<AuthContainer><Spinner /></AuthContainer>)

  return (
    <AuthContainer>
      <AuthMessegeScreen>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SuccessIcon style={{ marginBottom: '2.4rem' }} />
        </div>
        <HeaderMain style={{ textAlign: "center", marginBottom: '8px' }}>Email approved!</HeaderMain>
        <TextBody>You can now log in to your account using your credentials.</TextBody>
        <Link bold href="/auth">&larr; Return to Sign in page</Link>
      </AuthMessegeScreen>
    </AuthContainer>
  )
}

export default observer(SignUpEmailSuccess);