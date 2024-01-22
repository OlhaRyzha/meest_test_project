import { useStore } from "../../stores/store";
import { LeftSidebarContainer, CloseLeftSidebarButton, LeftSidebarBody } from "./left-sidebar.styles";
import { ReactComponent as XIcon } from "../../assets/xcross-icon.svg";
import { observer } from "mobx-react-lite";
import { BlurredBackground } from "../blurred-background/blurred-background.styles";

interface Props {
  children: any;
  withBlurredBackground?: boolean;
  onClose?: () => void;
}

const LeftSidebar = ({children, withBlurredBackground, onClose }: Props) => {
  const { navStore: { isLeftSidebarOpened, isLeftSidebarClosing, toggleLeftSidebar } } = useStore();

  if (!isLeftSidebarOpened && !isLeftSidebarClosing) return null;

  return (
    <>
      <LeftSidebarContainer isOpened={isLeftSidebarOpened}>
        <CloseLeftSidebarButton onClick={() => { toggleLeftSidebar(); }}>
            <XIcon />
        </CloseLeftSidebarButton>
        <LeftSidebarBody>
          {children}
        </LeftSidebarBody>
      </LeftSidebarContainer>
      {withBlurredBackground && <BlurredBackground />}
    </>
  )
}

export default observer(LeftSidebar);