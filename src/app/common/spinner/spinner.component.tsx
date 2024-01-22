import { SpinnerCircle, SpinnerOverlay } from './spinner.styles';

const Spinner = () => {
  return (
    <SpinnerOverlay data-testid='spinner'>
      <SpinnerCircle />
    </SpinnerOverlay>
  );
}

export default Spinner;