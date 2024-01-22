import { useNavigate } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const withRedirectToAuth = (WrappedComponent: any) => {
  const WithRedirectToAuth = (props: any, ref: any) => {
    
    const { userStore: { user }} = useStore();
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!user) navigate('/auth');
    }, [user, navigate])
  
    return <WrappedComponent {...props} />
  }

  return observer(WithRedirectToAuth);
}

export default withRedirectToAuth;