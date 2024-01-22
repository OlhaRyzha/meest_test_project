import styled, { css } from "styled-components";
import { Colors, FontSizes } from "../../../common/typography/typography.styles";

interface PopupProps {
  isOpened?: boolean;
}

export const NavPopupContainer = styled.div<PopupProps>`
  ${({isOpened}) => isOpened ? css`display: block;` : css`display: none;`}
  position: absolute;
  top: 3.5rem;
  right: 0;
  font-size: ${FontSizes.small};
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.5px;

  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  z-index: 1000;
`

interface ItemProps {
  isSelected?: boolean;
}

export const NavPopupItem = styled.div<ItemProps>`
  white-space: nowrap;
  box-sizing: border-box;

  ${({isSelected}) => 
    isSelected ? css`color: ${Colors.blue2};` : css`color: ${Colors.grayDark2};`
  }

  cursor: pointer;
  display: block;
  padding: 8px 16px;

  &:hover {
    background-color: ${Colors.grayLight6};
    border-radius: 6px;
  }

  &:active {
    background-color: ${Colors.grayLight5};
  }
`