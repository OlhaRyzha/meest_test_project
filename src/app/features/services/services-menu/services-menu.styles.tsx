import styled from "styled-components";
import { Colors } from "../../../common/typography/typography.styles";
import { ServicesUserInfoContainer } from "../services-user-info/services-user-info.styles";
import { ServicesMenuItemContainer } from "../services-menu-item/services-menu-item.styles";
import { InputSearchContainer } from "../../../common/input-search/input-search.styles";

export const ServicesMenuContainer = styled.div`
  padding-bottom: 2.4rem;
`

export const ServicesMenuHeader = styled.div`
  ${ServicesUserInfoContainer} {
    margin-bottom: 3.8rem;
  }

  ${InputSearchContainer} {
    margin-bottom: 2.8rem;
  }

  padding: 2.4em 2.4rem 2.4rem 2.2rem;
`

export const ServicesMenuBody = styled.div`
  & > ${ServicesMenuItemContainer}:last-child {
    margin-top: 8px;
    padding-left: 2.4rem;

    &:hover {
      background-color: ${Colors.grayLight6};
      border-radius: 6px;
    }

    &:active {
      background-color: ${Colors.grayLight5};
    }
  }
`