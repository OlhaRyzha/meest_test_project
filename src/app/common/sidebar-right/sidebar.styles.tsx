import styled, { css, keyframes } from "styled-components";
import { Colors, HeaderMain, HeaderSecondary } from "../typography/typography.styles";
import { AuthContainer } from "../../routes/authorization/authorization.styles";

interface Props {
  isOpened: boolean;
}

const slideToLeft = keyframes`
    0% {
      right: -50rem;
    }

    100% {
      right: 0;
    }
`;

export const SidebarContainer = styled.div<Props>`
  position: fixed;
  background-color: white;
  z-index: 9000;
  height: 100vh;
  width: 50rem;
  top: 0;
  right: -50rem;

  transition: right .4s ease-out;
  
  ${({ isOpened }) => isOpened && css`
      animation: ${slideToLeft} .4s;
      right: 0;
    `
  }

  ${HeaderMain} {
    text-align: center;
  }

  ${HeaderSecondary} {
    padding-left: 2.4rem;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin: 0 1.6rem;
  border-bottom: 1px solid ${Colors.grayLight3};
`

export const SidebarBody = styled.div`
  padding: 2.4rem;
  ${AuthContainer} {
    padding: 0;
    margin: 0;
  }
`

export const SidebarButtonClose = styled.span`
  outline: none;
  background: transparent;
  border: none;
  margin: 0;
  margin-right: 2.4rem;
  line-height: 0;
  cursor: pointer;
  svg path {
    fill: ${Colors.grayLight2};
  }

  & svg path {
    transition: fill .2s;
  }
  
  &:hover svg path {
    fill: ${Colors.gray2};
  }
`