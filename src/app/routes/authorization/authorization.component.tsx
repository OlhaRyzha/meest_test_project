import { observer } from "mobx-react-lite";
import { AuthContainer } from "./authorization.styles";

import AuthTabs from "../../features/authentication/auth-tabbed-container/auth-tabbed-container.component";
import SignUpEmailSent from "../../features/authentication/sign-up/sign-up-email-sent.component";

import { useStore } from "../../stores/store";
import PasswordRestore from "../../features/authentication/password-restore/password-restore.component";
import RestoreEmailSent from "../../features/authentication/password-restore/restore-email-sent.component";

const Authorization = () => {

  const { navStore: { signUpEmailSentShown, passwordResetEmailSentShown, passwordResetFormShown } } = useStore();

  return (
    <AuthContainer>
      {signUpEmailSentShown
        ? <SignUpEmailSent />
        : passwordResetFormShown
          ? <PasswordRestore />
          : passwordResetEmailSentShown
            ? <RestoreEmailSent />
            : <AuthTabs />
      }
    </AuthContainer>
  )
}

export default observer(Authorization);