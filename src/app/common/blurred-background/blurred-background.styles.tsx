import styled from "styled-components";

export const BlurredBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 200vh;
  top: 0;
  left: 0;
  z-index: 8000;
  background-color: #314c8144;
  color: #314c8144;
  backdrop-filter: blur(1px); // This be the blur
`