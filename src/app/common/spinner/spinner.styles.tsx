import styled from 'styled-components';
import { Colors } from '../typography/typography.styles';
// import spinnerCircle from '../../assets/spinner-circle-icon.svg'

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const SpinnerCircle = styled.div`
//   display: inline-block;
//   background: url(${spinnerCircle}) no-repeat center;
//   animation: spin 1s ease-in-out infinite;
//   -webkit-animation: spin 1s ease-in-out infinite;
//   @keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
//   @-webkit-keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
// `;

export const SpinnerCircle = styled.div`
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  border: 3px solid ${Colors.blue2};
  border-radius: 50%;
  border-top-color: ${Colors.white};
  border-right-color: ${Colors.white};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
