import styled from "styled-components";
import { Colors, FontSizes, HeaderTertiary, LinkFooter } from "../../common/typography/typography.styles";
import { InputDropdownContainer } from "../../common/input-dropdown/input-dropdown.styles";

export const FooterContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  background-color: ${Colors.grayLight5};

  ${InputDropdownContainer} {
    margin-bottom: 1.2rem;
  }
`

export const FooterTopContainer = styled.div`
  padding: 3.2rem 0;
  /* display: none; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4.8rem;
  justify-items: left;
`;

export const FooterContent = styled.div`
  max-width: 144rem;
  padding: 0 1.6rem;
  margin: 0 auto;
`

export const FooterColumn = styled.div`
  width: 100%;
  ${HeaderTertiary} {
    margin-bottom: 1.6rem;
  }

  ${LinkFooter} {
    display: block;
    margin-bottom: 1.2rem;
  }
`

export const FooterBottomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const SocialLinksContainer = styled.span`

`;

export const AppLinksContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  span {
    font-size: ${FontSizes.small};
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: 0.5px;
  }
`