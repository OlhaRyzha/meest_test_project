import styled, { css } from "styled-components";
import { Colors, TextValidation } from "../typography/typography.styles";
import greenCircleIcon from "../../assets/green-circle-icon.svg";
import grayCircle from "../../assets/gray-circle-icon.svg";

export const PasswordValidatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: .8rem;
  row-gap: .8rem;
`


export const ValidationMarkerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  column-gap: 6px;
  margin-bottom: .6rem;
  margin-top: 1.6em;
  `

interface Props {
  valid?: boolean;
}

export const ValidationOption = styled.span<Props>`
  ${TextValidation}
  background: url(${greenCircleIcon}) no-repeat left;
  padding-left: 1.6rem;
  
  ${({ valid }) => valid
    ? css`background: url(${greenCircleIcon}) no-repeat left;`
    : css`background: url(${grayCircle}) no-repeat left;`
  }

  transition: background .3s;
`

export const ValidationMarker = styled.span<Props>`
  display: inline-block;
  height: .4rem;
  border-radius: 20px;
  width: 100%;

  ${({ valid }) => valid
    ? css`background-color: ${Colors.yellow};`
    : css`background-color: ${Colors.grayLight5};`
  }

  transition: background-color .3s;
`