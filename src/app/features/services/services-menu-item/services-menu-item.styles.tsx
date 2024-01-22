import styled, { css } from "styled-components";
import { Colors } from "../../../common/typography/typography.styles";

interface Props {
  iconColor?: 'gray' | 'red';
}

export const ServicesMenuItemContainer = styled.span<Props>`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1.6rem;
  padding: .6rem 1.6rem;
  cursor: pointer;

  svg {
    width: 1.6rem;
    height: 1.6rem;

    path {
      ${({iconColor}) => iconColor === 'red' ? css`fill: ${Colors.red};` : css`fill: ${Colors.grayDark2};`}
      
    }
  }
`