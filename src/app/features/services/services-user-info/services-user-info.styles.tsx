import styled from "styled-components";
import { Colors, FontSizes } from "../../../common/typography/typography.styles";

export const ServicesUserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;

  svg {
    cursor: pointer;
  }
`

export const ServicesUserAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${Colors.blue4};
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  color: ${Colors.white};
`

export const ServicesUserName = styled.span`
  font-size: ${FontSizes.normal};
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 0.5px;
  text-align: center;
`

export const ContactContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`