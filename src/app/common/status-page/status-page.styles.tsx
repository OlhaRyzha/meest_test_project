import styled from "styled-components";
import { Colors } from "../../common/typography/typography.styles";

export const StatusPageContainer = styled.div`
  position: relative;
  
  max-width: 144rem;
  margin: 1.6rem auto;
`

export const StatusPageBackground = styled.div`
  background-color: ${Colors.white};
  border-radius: 1.2rem;
  margin-right: 1.6rem;
  margin-left: 1.6rem;
  height: calc(100vh - 8.4rem);
  min-height: 55rem;
`

export const StatusPageCenteredContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 45.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3.2rem
`

export const StatusPageButtonsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 6rem;
`