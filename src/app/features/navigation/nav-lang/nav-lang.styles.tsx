import styled from "styled-components";
import { NavPopupContainer } from "../nav-popup/nav-popup.styles";

export const NavLangContainer = styled.div`
  position: relative;

  ${NavPopupContainer} {
    padding: 1.6rem;
  }
`

export const NavLangButton  = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`