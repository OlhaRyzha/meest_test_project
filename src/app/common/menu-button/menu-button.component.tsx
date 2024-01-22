import { MenuButtonContent, MenuButtonWrapper } from "./menu-button.styles";

interface Props {
  isOpened: boolean;
  onClick: () => void;
}
const MenuButton = ({ isOpened, onClick }: Props) => (
  <MenuButtonWrapper onClick={(_) => onClick()}>
    <MenuButtonContent isOpened={isOpened} />
  </MenuButtonWrapper>
)

export default MenuButton;