import { css } from "styled-components";
import { Colors, TextToastErrorMessage, TextToastMessage } from "../typography/typography.styles";
import 'react-toastify/dist/ReactToastify.css';

export const ToastStyles = css`
  .toastContainerCustom {
    width: 18%;
    min-width: 25rem;
  }

  .toastErrorCustom {
    background-color: #e74d3cce;
    ${TextToastErrorMessage};

    .Toastify__toast-body {
      div svg path {
        fill: ${Colors.grayLight6}
      }
    }
  }

  .toastCustom {
    background-color: ${Colors.greenTransparent};
    ${TextToastMessage};
  }

  .toastErrorCustom, .toastCustom {
    backdrop-filter: blur(1px);
    
    border-radius: 10px;
    gap: 8px;
    
    button {
      flex: 0 0 2.2rem;
      opacity: 1;
      background-color: ${Colors.grayLight6};
      border-radius: 50%;
      width: 2.2rem;
      height: 2.2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transform: translateX(1px);
        path {
          fill: ${Colors.gray2};
        }
      }
      
      &:hover {
        background-color: ${Colors.grayLight5};
        svg path {
          fill: ${Colors.gray2}
        }
      }

      &:active {
        background-color: ${Colors.grayLight4};
      }

    }
  }
`