import styled from "styled-components";
import { Colors, HeaderMain, HeaderTertiary } from "../../../common/typography/typography.styles";

export const AuthTabsContainer = styled.div`

  ${HeaderMain} {
    margin-bottom: 2.4rem;
  }

  .react-tabs {
    -webkit-tap-highlight-color: transparent;

    
    &__tab-list {
      display: flex;
      justify-content: center;
      gap: 2.4rem;
      margin: 2rem 0 4.4rem 0;
      padding: 0;
    }
    
    &__tab {
      display: inline-block;
      border-bottom: 2px solid transparent;
      bottom: -1px;
      position: relative;
      list-style: none;
      padding: 6px 12px;
      width: 50%;
      text-align: center;
      cursor: pointer;
      transition: all .2s;
      
      ${HeaderTertiary} {
        color: ${Colors.gray2}
      }


      &--selected {
        border-bottom: 2px solid ${Colors.blue2};
        ${HeaderTertiary} {
          color: ${Colors.grayDark2}
        }
      }

      &--disabled {
        color: GrayText;
        cursor: default;
      }

      &:focus {
        outline: none;
      }
    }

    &__tab-panel {
      display: none;

      &--selected {
        display: block;
      }
    }
  }
`