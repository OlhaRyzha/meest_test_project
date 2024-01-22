import styled, { css } from "styled-components";
import { Colors } from "../../../common/typography/typography.styles";

export const ServicesNavContainer = styled.div`
  position: relative;
`

export const ServicesNavMobileContainer = styled.div`
  display: none;
`

export const ServicesNavButton = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

interface ServicesContainerProps {
  isOpened: boolean;
}

export const ServicesContainer = styled.div<ServicesContainerProps>`
  min-height: 89rem;
  flex: 0 0 25%; /* 33% width, don't grow or shrink */
  min-width: 27rem;
  height: 100%;
  background-color: ${Colors.white};
  display: block;
  overflow-x: hidden;
  border-radius: 1.2rem;
  border: 1px solid ${Colors.grayLight5};

  ${({isOpened}) => !isOpened && css`display: none` }
`

