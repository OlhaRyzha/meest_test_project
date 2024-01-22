import { Outlet } from "react-router-dom";
import { GlobalStyles } from "./global.styles";
import Navigation from "./app/features/navigation/navigation.component";
import { observer } from "mobx-react-lite";
import { useStore } from "./app/stores/store";
import { useEffect } from "react";
import Spinner from "./app/common/spinner/spinner.component";
import Footer from "./app/features/footer/footer.component";
import { AppContainer } from "./App.styles";
import { ToastContainer } from "react-toastify";



function App() {

  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.meestToken) {
      userStore.getCurrentUser().finally(() => commonStore.setAppLoaded(true));
    } else {
      commonStore.setAppLoaded(true);
    }
  }, [userStore, commonStore])

  if (!commonStore.appLoaded) return <Spinner />

  return (
    <>
      <AppContainer>
      <ToastContainer position="top-center" 
        className='toastContainerCustom' 
        hideProgressBar={true}
        autoClose={5000}
        closeOnClick/>
        <GlobalStyles />
        <Navigation />
        <Outlet />
      </AppContainer>
      <Footer />
    </>
  );
}

export default observer(App);