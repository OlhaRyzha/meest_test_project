import styled from "styled-components";
import { Colors } from "../typography/typography.styles";

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 2.4rem;
`

export const CheckboxContainer = styled.label`
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: -1px;
      left: -3px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 14px;
      width: 14px;
      background-color: transparent;
      border: 1px solid ${Colors.gray2};
      border-radius: 2px;
      transition: all .2s;
    }
    
    span:focus {
      outline: none;
      border: 1px solid ${Colors.blue3};
      box-shadow: 0 0 0 3px ${Colors.blueLight3};
    }

    span:active {
      outline: none;
      border: 1px solid ${Colors.blue3};
      box-shadow: 0 0 0 3px #89caff;
    }

    input ~ span svg {
      display: none;
    }

    input:checked ~ span {
      background-color: ${Colors.blue4};
      border: 1px solid ${Colors.blue4};
    }

    input:checked ~ span svg{
      display: block;
    }
`
