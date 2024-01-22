import styled from "styled-components";

import { Link } from "react-router-dom";
import { Colors } from "../../common/typography/typography.styles";

export const NavigationContainer = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  padding: 8px 0;
`;

export const NavContent = styled.div`
  position: relative;
  max-width: 144rem;
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavServicesContainer = styled.div`
  padding-left: 1.6rem;
  border-left: 1px solid ${Colors.gray2};
  display: flex;
  align-items: center;
`

export const RightSide = styled.div`
  /* width: 50%; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;
`;

export const NavLink = styled(Link)`
  &:link,
  &:visited,
  & {
    border: none;
    display: inline-block;
    background-color: transparent;
    font-family: inherit;
    text-transform: uppercase;
    font-size: 1.6rem;

    text-decoration: none;
    color: #333;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(#000, 0.2);
    background-color: #333;
    color: #fff;
  }
`;
