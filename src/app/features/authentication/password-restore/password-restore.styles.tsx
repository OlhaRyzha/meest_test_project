import styled from "styled-components";
import { HeaderMain } from "../../../common/typography/typography.styles";
import { BaseButton } from "../../../common/button/button.styles";
import { FieldContainer } from "../../../common/form-field-text/form-field-text.styles";

export const PasswordRestoreContainer = styled.div`
  ${HeaderMain} {
    margin-bottom: 1.6rem;
  }

  form {
    margin-top: 2.4rem;
  }

  ${FieldContainer} {
    margin-bottom: 2.4rem;
  }

  ${BaseButton} {
    margin-bottom: 2.4rem;
  }
`