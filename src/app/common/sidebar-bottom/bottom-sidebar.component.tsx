import { useStore } from "../../stores/store";
import { BottomSidebarContainer, CloseBottomSidebarButton, DragLine } from "./bottom-sidebar.styles";
import { ReactComponent as XIcon } from "../../assets/xcross-icon.svg";
import { observer } from "mobx-react-lite";
import { BlurredBackground } from "../blurred-background/blurred-background.styles";

interface Props {
  children: any;
  withBlurredBackground?: boolean;
}

const BottomSidebar = ({children, withBlurredBackground }: Props) => {
  const { navStore: { isBottomSidebarOpened, isBottomSidebarClosing, toggleBottomSidebar } } = useStore();

  if (!isBottomSidebarOpened && !isBottomSidebarClosing) return null;

  return (
    <>
      <BottomSidebarContainer isOpened={isBottomSidebarOpened}>
        <DragLine onClick={() => toggleBottomSidebar()}/>
        <CloseBottomSidebarButton onClick={() => toggleBottomSidebar()}>
          <XIcon />
        </CloseBottomSidebarButton>
        {children}
      </BottomSidebarContainer>
      {withBlurredBackground && <BlurredBackground />}
    </>
  )
}

export default observer(BottomSidebar);