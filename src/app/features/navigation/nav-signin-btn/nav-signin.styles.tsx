import styled from "styled-components";
import { NavBtn } from "../nav-btn/nav-btn.styles";

export const SignInNavButton  = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  & > ${NavBtn}:nth-child(2) {
    display: none;
  }
`