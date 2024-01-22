import styled from "styled-components";
import { Colors } from "../../../common/typography/typography.styles";

export const NavBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color .2s;

  &:hover {
    background-color: ${Colors.gray4};
  }

  &:active {
    background-color: ${Colors.gray3};
  }
`