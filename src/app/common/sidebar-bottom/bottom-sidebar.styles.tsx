import styled, { css, keyframes } from "styled-components";
import { Colors } from "../typography/typography.styles";

interface Props {
  isOpened: boolean;
}

const slideFromBottom = keyframes`
    0% {
      bottom: -50rem;
    }

    100% {
      bottom: 0;
    }
`;

export const BottomSidebarContainer = styled.div<Props>`
  position: fixed;
  background-color: white;
  z-index: 9000;
  width: 100vw;
  height: 50rem;
  bottom: -50rem;
  left: 0;
  padding: 2.6rem 2.4rem 4rem 2.4rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  transition: bottom .4s ease-out;

  ${({ isOpened }) => isOpened && css`
      animation: ${slideFromBottom} .4s;
      bottom: 0;
    `
  }
`

export const CloseBottomSidebarButton = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.3rem;
  height: 2.4rem;
  width: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${Colors.grayLight6};
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.grayLight5};
  }

  &:active {
    background-color: ${Colors.grayLight4};
  }

  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`

export const DragLine = styled.span`
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
  display: inline-block;
  height: .5rem;
  width: 12%;
  background-color: ${Colors.grayDark4};
`