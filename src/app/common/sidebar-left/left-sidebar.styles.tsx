import styled, { css, keyframes } from "styled-components";
import { Colors } from "../typography/typography.styles";

interface Props {
  isOpened: boolean;
}

const slideFromLeft = keyframes`
    0% {
      left: -75vw;
    }

    100% {
      left: 0;
    }
`;

export const LeftSidebarContainer = styled.div<Props>`
  position: fixed;
  background-color: white;
  z-index: 9000;
  width: 75vw;

  top: 0;
  left: -75vw;
  border: none;
  

  transition: left .4s ease-out;

  ${({ isOpened }) => isOpened && css`
      animation: ${slideFromLeft} .4s;
      left: 0;
    `
  }
`

export const LeftSidebarBody = styled.div`
  height: 100vh;
  overflow-y: auto;
`

export const CloseLeftSidebarButton = styled.div`
  z-index: 9000;
  position: absolute;
  top: 1.6rem;
  right: -4.5rem;
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${Colors.grayLight6};
  transition: all .2s;
  cursor: pointer;

  transition: left .4s ease-out;

  &:hover {
    background-color: ${Colors.grayLight5};
  }

  &:active {
    background-color: ${Colors.grayLight4};
  }

  svg {
    height: 2rem;
    width: 2rem;
  }
`