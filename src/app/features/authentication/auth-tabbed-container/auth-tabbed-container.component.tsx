import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { AuthTabsContainer } from "./auth-tabbed-container.styles";
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import { HeaderTertiary } from '../../../common/typography/typography.styles';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/store';

const AuthTabs = () => {
  const { navStore: { authTabIndex, setAuthTabIndex } } = useStore();

  return (
    <AuthTabsContainer>
      <Tabs selectedIndex={authTabIndex} onSelect={(index) => setAuthTabIndex(index)}>
        <TabList>
          <Tab tabIndex='-1'><HeaderTertiary>Sign In</HeaderTertiary></Tab>
          <Tab tabIndex='-1'><HeaderTertiary>Sign Up</HeaderTertiary></Tab>
        </TabList>
        <TabPanel>
          <SignIn />
        </TabPanel>
        <TabPanel>
          <SignUp />
        </TabPanel>
      </Tabs>
    </AuthTabsContainer>
  )
}

export default observer(AuthTabs);