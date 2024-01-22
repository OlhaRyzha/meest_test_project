import styled, { css } from "styled-components";

type Props = {
  isOpened: boolean;
}

export const MenuButtonWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  cursor: pointer;
`

export const MenuButtonContent = styled.span<Props>`

    span {
      display: inline-block;
    }

    display: inline-block;
    width: 1.6rem;
    height: 2px;
    background-color: #96999E;
    text-align: center;
    transition: all 0.1s;
    border-radius: 10px;

    &::before {
      content: "";
      display: inline-block;
      position: relative;
      height: 2px;
      width: 1.6rem;
      transform: translateY(-13px);
      background-color: #96999E;
      transition: all 0.3s;
      border-radius: 10px;
    }

    &::after {
      content: "";
      display: inline-block;
      position: relative;
      height: 2px;
      width: 1.6rem;
      transform: translateY(-14px);
      background-color: #96999E;
      transition: all 0.3s;
      border-radius: 10px;
    }

    ${(props) =>
    props.isOpened && css`
        background-color: transparent;

        &::before {
          transform: translateY(-8px) rotate(45deg);
        }

        &::after {
          transform: translateY(-20px) rotate(-45deg);
        }
      `
  }
`;