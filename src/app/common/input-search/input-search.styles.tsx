import styled, { css } from "styled-components";
import { FieldContainer, InputContainer } from "../form-field-text/form-field-text.styles";
import { Colors, TextLabel } from "../typography/typography.styles";

interface Props {
  isDisabled?: boolean;
  hIconPosition?: 'left' | 'right';
  treatWholeInputAsSearch?: boolean;
  disableSearchHover?: boolean;
}

export const SearchIconContainer = styled.span<Props>`
  display: flex;
  position: absolute;
  bottom: 0;
  transform: translateY(-50%);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  
  svg path {
    transition: all .2s;
  }

  ${({disableSearchHover}) => disableSearchHover &&
    css`
      cursor: default;
    `
  }

  ${({isDisabled, disableSearchHover}) => !isDisabled && !disableSearchHover &&
    css`
      &:hover { 
        svg path {
            fill: ${Colors.blue2};
        }
      }
    `
  }
  
  ${({isDisabled}) => isDisabled &&
    css`
      &:hover { 
        svg path {
            fill: ${Colors.gray2};
        }
      }
    `
  }
`

export const InputSearchContainer = styled(FieldContainer)<Props>`
  position: relative;

  ${({isDisabled}) => isDisabled && 
    css`
      input:disabled {
        background-color: ${Colors.grayLight6};
      }`
  }

  ${({isDisabled, treatWholeInputAsSearch}) => !isDisabled && treatWholeInputAsSearch &&
    css`
      ${InputContainer}:hover ${SearchIconContainer} { 
        svg path {
            fill: ${Colors.blue2};
        }
      }
    `
  }

  input {
    max-height: 40px;
  }

  ${TextLabel} {
    position: relative;
    display: inline-block;
    margin-bottom: 6px;
  }

  ${({hIconPosition}) => hIconPosition === 'right' &&
    css`
      ${SearchIconContainer} { 
        right: 1.6rem;
      }

      input {
        padding: 1rem 4.2rem 1rem 1.6rem;
      }
    `
  }
  
  ${({hIconPosition}) => hIconPosition === 'left' &&
    css`
      ${SearchIconContainer} { 
        left: 1.6rem;
      }

      input {
        padding: 1rem 1.6rem 1rem 4.2rem;
      }
    `
  }
`