import styled, {css} from "styled-components";
import { Colors, FontSizes, TextLabel } from "../../typography/typography.styles";
import checkMarkIcon from "../../../assets/checked-mark-icon.svg";

interface Props {
  isOpened: boolean;
}

export const DropdownSelector = styled.div<Props>`
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: white;
  border: 1px solid ${Colors.grayLight3};
  border-radius: 10px;
  box-sizing: border-box;
  color: #333;
  cursor: default;
  outline: none;
  padding: 1rem .8rem 1rem 1.2rem;
  transition: all 200ms ease;
  cursor: pointer;

  svg {
    transition: all 200ms ease;
    ${({isOpened}) => isOpened &&
      css`transform: rotate(180deg)`
    }
  }
`

interface PopupProps {
  isOpened: boolean;
}

export const DropdownPopup = styled.span<PopupProps>`
  flex-direction: column;
  gap: 4px;
  margin-top: 1rem;
  max-height: calc(100vh - 18rem);
  margin: 1rem auto 1rem;
  overflow-y: auto;
  background-color: ${Colors.white};
  /* border: 1px solid ${Colors.grayLight3}; */
  /* padding: 1rem 1rem; */
  border-radius: 10px;
  /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06); */
  ${({isOpened}) => isOpened
    ? css`display: flex;`
    : css`display: none;`
  }
`

interface OptionProps {
  isSelected?: boolean;
  displayCheckMarkForSelected?: boolean;
}

export const DropdownOption = styled.span<OptionProps>`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  color: ${Colors.gray2};
  font-size: ${FontSizes.medium};
  line-height: 2.4rem;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${Colors.grayLight6};
    border-radius: 6px;
  }

  &:active {
    background-color: ${Colors.grayLight5};
  }

  ${({isSelected}) => isSelected 
    ? css`color: ${Colors.blue2};
          background-color: ${Colors.grayLight6};
          border-radius: 6px;
        ` 
    : css`color: ${Colors.grayDark2};`}


  ${({isSelected, displayCheckMarkForSelected}) => isSelected && displayCheckMarkForSelected && 
      css`&::after {
            content: ''; /* Required content property for ::after */
            position: absolute;
            top: 50%;
            right: 1.2rem;
            transform: translateY(-50%);
            width: 1.6rem; /* Adjust width and height as needed */
            height: 1.6rem;
            background-image: url(${checkMarkIcon}); /* Replace with your icon image path */
            background-size: contain; /* Adjust to fit the icon size */
            background-repeat: no-repeat;
          }
        `
  }
`

export const DropdownSelectedOption = styled.span`
  border-color: ${Colors.grayLight3};
  color: ${Colors.gray2};
  font-size: ${FontSizes.medium};
  line-height: 2.4rem;
`

export const PhoneCodeDropdownContainer = styled.div`
  position: relative;
  ${TextLabel} {
    color: ${Colors.gray2};
    display: inline-block;
    margin-bottom: 6px;
  }
`

export const PhoneSearchContainer = styled.div`
`