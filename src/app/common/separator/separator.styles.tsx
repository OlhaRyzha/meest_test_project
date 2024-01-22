import styled, { css } from "styled-components"
import { Colors, FontSizes } from "../typography/typography.styles"

export const SeparatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;
  gap: 9px;

  font-size: ${FontSizes.medium};
  color: ${Colors.blue3};
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 3.2rem;
  text-transform: uppercase;
`

interface Props {
  width?: string;
}

export const SeparatorLine = styled.span<Props>`
  display: inline-block;
  ${({width}) => width
    ? css`width: ${width};`
    : css`width: 35%;`
  }
  height: 2px;
  background-color: ${Colors.grayLight4};
`