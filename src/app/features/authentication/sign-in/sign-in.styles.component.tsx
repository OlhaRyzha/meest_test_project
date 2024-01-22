import styled from "styled-components";
import { BaseButton, SocialSiginButton } from "../../../common/button/button.styles";

export const SignInContainer = styled.div`
  form ${BaseButton} {
    margin-top: 3.2rem;
  }

  ${SocialSiginButton} {
    margin-top: 4rem;
  }

  ${SocialSiginButton}:last-child {
    margin-top: 2.4rem;
  }
`;