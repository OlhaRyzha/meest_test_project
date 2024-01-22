import styled, { css } from "styled-components";
import { ServicesMenuItemContainer } from "../../features/services/services-menu-item/services-menu-item.styles";
import { Colors, TextServicesMenu } from "../typography/typography.styles";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const AccordionSection = styled.div`

`
interface Props {
  isOpened: boolean;
}

export const AccordionItemsContainer = styled.div<Props>`
  ${({isOpened}) => isOpened ? css`display: flex;` : css`display:none`};

  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

export const AccordionTitle = styled.span<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  &:hover {
    background-color: ${Colors.grayLight6};
    border-radius: 6px;
  }

  &:active {
    background-color: ${Colors.grayLight5};
  }

  ${ServicesMenuItemContainer} {
    padding-left: 0;
  }

  & > svg {
    transition: transform .2s;
    ${({ isOpened }) => isOpened && css`transform: rotate(180deg)`}
  }
`

interface ItemProps {
  isSelected: boolean;
  onClick: any;
}

export const AccordionItem = styled.span<ItemProps>`
  position: relative;
  cursor: pointer;
  padding-left: 5.6rem;
  padding-right: 2.4rem;

  ${({isSelected}) => isSelected &&
    css`
      &::before {
        display: inline-block;
        content: "";
        height: 2.4rem;
        width: 2rem;
        border-radius: 4px;
        background-color: ${Colors.blue2};
        position: absolute;
        left: -1.8rem;
        top: 50%;
        transform: translateY(-50%);
      }
      ${ServicesMenuItemContainer} > ${TextServicesMenu} {
        color: ${Colors.blue2};
      }
      svg path {
        fill: ${Colors.blue2};
      }
    `

  }

  &:hover {
    background-color: ${Colors.grayLight6};
    border-radius: 6px;
  }

  &:active {
    background-color: ${Colors.grayLight5};
  }

  ${ServicesMenuItemContainer} {
    padding-left: 0;
  }

  &:first-child {
    margin-top: 8px;
  }
`