import styled from "styled-components";
import { Colors, FontSizes, TextLabel } from "../typography/typography.styles";

export const InputDropdownContainer = styled.div`
  ${TextLabel} {
    color: ${Colors.gray2};
    display: inline-block;
    margin-bottom: 6px;
  }

  .Dropdown-root {
    position: relative;
  }

  .Dropdown-root.is-open .Dropdown-control {
    border-color: ${Colors.blue4};
  }

  .Dropdown-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: white;
    border: 1px solid ${Colors.grayLight2};
    border-radius: 10px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 1rem 1.6rem;
    transition: all 200ms ease;
  }

  .Dropdown-placeholder, .Dropdown-menu {
    font-size: ${FontSizes.normal};
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.5px;
  }

  .Dropdown-control:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }

  .Dropdown-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 14px;
    width: 0
  }

  .is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .Dropdown-menu {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: 6px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .Dropdown-menu .Dropdown-group > .Dropdown-title{
    padding: 8px 10px;
    color: rgba(51, 51, 51, 1);
    font-weight: bold;
    text-transform: capitalize;
  }

  .Dropdown-option {
    box-sizing: border-box;
    color: ${Colors.grayDark2};
    cursor: pointer;
    display: block;
    padding: 8px 16px;
  }

  .Dropdown-option:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .Dropdown-option:hover {
    background-color: ${Colors.grayLight6};
    border-radius: 6px;
  }

  .Dropdown-option.is-selected {
    color: ${Colors.blue2};
  }

  .Dropdown-noresults {
    box-sizing: border-box;
    color: #ccc;
    cursor: default;
    display: block;
    padding: 8px 10px;
  }
`
