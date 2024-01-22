import { observer } from "mobx-react-lite";
import { HeaderMain, Link, TextBody } from "../../../common/typography/typography.styles";
import { useStore } from "../../../stores/store";
import { AuthMessegeScreen } from "../auth-messege-screen/auth-messege-screen.styles";
import { useEffect, useState } from "react";
import { sendPasswordResetEmailAsync } from "../../../utils/firebase/firebase.utils";

const RestoreEmailSent = () => {
  const { commonStore: { currentAuthData }, navStore: { setAuthTabIndex, togglePasswordResetEmailSentShown } } = useStore();
  const [emailTimeout, setEmailTimeout] = useState(90);

  useEffect(() => {
    if (emailTimeout > 0) {
      setTimeout(() => { setEmailTimeout(emailTimeout - 1); }, 1000);
    }

  }, [emailTimeout, setEmailTimeout])

  function handleClick(e: any): void {
    e.preventDefault();

    togglePasswordResetEmailSentShown();
    setAuthTabIndex(0);
  }

  async function handleSendAgain(e: any) {
    e.preventDefault();
    setEmailTimeout(90);

    try {
      await sendPasswordResetEmailAsync(currentAuthData!.email);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthMessegeScreen>
      <HeaderMain>You're almost there!</HeaderMain>
      <TextBody style={{ marginBottom: '2.4rem' }}>We have sent an email to <b>{currentAuthData?.email}</b>. Please check your inbox and follow the instructions to finish setting your account.</TextBody>
      {emailTimeout !== 0
        ? <TextBody>If email doesn’t arrive soon, you may need to check your spam folder or send again in {emailTimeout} seconds</TextBody>
        : <TextBody>If email doesn’t arrive soon, you may need to check your spam folder or click <Link onClick={(e) => { handleSendAgain(e) }} href={""}>Send again</Link></TextBody>
      }
      <Link bold onClick={(e) => handleClick(e)} href="">&larr; Return to Sign in page</Link>
    </AuthMessegeScreen>
  )
}

export default observer(RestoreEmailSent);