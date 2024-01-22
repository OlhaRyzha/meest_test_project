import styled, { StyledComponent, createGlobalStyle, css } from "styled-components";
import { Colors } from "./app/common/typography/typography.styles";
import { MediaQueries } from "./media-queries.styles";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  h1,h2,h3,p {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Montserrat, "Open Sans", sans-serif;
    background-color: ${Colors.blueLight4};
    margin: 0;
  }

  ${MediaQueries};
`;

export interface MarginProps {
  mr?: string;
  ml?: string;
  mt?: string;
  mb?: string;
}

// Generic function to generate a base styled component for any HTML element
export const BaseMarginComponent = <T extends keyof JSX.IntrinsicElements>(
  tagName: T
): StyledComponent<T, any, MarginProps, never> => {
  return styled(tagName)<MarginProps>`
    ${({ mr }) =>
      mr &&
      css`
        margin-right: ${mr};
      `}

    ${({ ml }) =>
      ml &&
      css`
        margin-left: ${ml};
      `}

      ${({ mt }) =>
      mt &&
      css`
        margin-top: ${mt};
      `}

      ${({ mb }) =>
      mb &&
      css`
        margin-bottom: ${mb};
      `}
  `;
};
