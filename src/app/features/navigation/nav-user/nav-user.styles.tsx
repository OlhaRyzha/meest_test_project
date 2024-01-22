import styled from "styled-components";
import { Colors } from "../../../common/typography/typography.styles";
import { NavPopupContainer } from "../nav-popup/nav-popup.styles";
import { ServicesMenuItemContainer } from "../../services/services-menu-item/services-menu-item.styles";
import { ServicesUserInfoContainer } from "../../services/services-user-info/services-user-info.styles";

export const UserNavContainer = styled.span`
  position: relative;

  ${ServicesMenuItemContainer}:not(:last-child) {
    margin-bottom: 8px;
  }

  ${ServicesMenuItemContainer} {
    &:hover {
      background-color: ${Colors.grayLight6};
      border-radius: 6px;
    }

    &:active {
      background-color: ${Colors.grayLight5};
    }
  }

  ${NavPopupContainer} {
    padding: 1.6rem .8rem;

    ${ServicesUserInfoContainer} {
      margin-bottom: 2.4rem;
    }
  }
`

export const UserNavMobileContainer = styled.div`
  display: none;

  ${ServicesMenuItemContainer}:not(:last-child) {
    margin-bottom: 8px;
  }

  ${ServicesMenuItemContainer} {
    &:hover {
      background-color: ${Colors.grayLight6};
      border-radius: 6px;
    }

    &:active {
      background-color: ${Colors.grayLight5};
    }
  }

  ${ServicesUserInfoContainer} {
      margin-bottom: 2.4rem;
    }
`;

export const UserNavBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`

export const UserAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: ${Colors.blue4};

  color: ${Colors.white};
  font-family: Roboto;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.5px;
`