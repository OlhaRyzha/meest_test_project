import { HeaderSecondary } from "../typography/typography.styles";
import { SidebarBody, SidebarButtonClose, SidebarContainer, SidebarHeader } from "./sidebar.styles";
import { ReactComponent as XCrossIcon } from "../../assets/xcross-icon.svg";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import { BlurredBackground } from "../blurred-background/blurred-background.styles";

interface Props {
  children: any;
  name?: string;
  header?: string;
  onClose?: () => void;
  withBlurredBackground?: boolean;
}

const Sidebar = ({children, name, header, withBlurredBackground, onClose}: Props) => {
  const { navStore: { isSidebarOpened, isSidebarClosing, sidebarOpenedName, toggleSidebar, toggleSidebarByName } } = useStore();

  if (!isSidebarOpened && !isSidebarClosing) return null;

  if (name && (sidebarOpenedName !== name)) return null;

  return (
    <>
      <SidebarContainer isOpened={isSidebarOpened}>
        <SidebarHeader>
          {header && <HeaderSecondary>{header}</HeaderSecondary>}
          <SidebarButtonClose onClick={() => {
            name ? toggleSidebarByName(name) : toggleSidebar();
            onClose && onClose();
          }}>
            <XCrossIcon />
          </SidebarButtonClose>
        </SidebarHeader>
        <SidebarBody>
          {children}
        </SidebarBody>
      </SidebarContainer>
      {withBlurredBackground && <BlurredBackground />}
    </>
  )
}

export default observer(Sidebar);