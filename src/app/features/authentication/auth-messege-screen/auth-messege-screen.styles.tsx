
import styled from "styled-components";
import { HeaderMain, Link, TextBody } from "../../../common/typography/typography.styles";

export const AuthMessegeScreen = styled.div`
  /* margin-top: 6.4rem; */

  ${HeaderMain} {
    margin-bottom: 3.2rem;
  }

  ${TextBody} ${Link} {
    margin-top: 0;
  }

  ${Link} {
      display: inline-block;
      margin-top: 2rem;
  }
`;