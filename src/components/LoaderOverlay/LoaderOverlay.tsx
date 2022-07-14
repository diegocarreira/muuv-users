import './LoaderOverlay.scss';
import loadingSVG from './loading.svg';
type LoaderOverlayPropsType = {
  active?: boolean;
  message?: string;
};
const LoaderOverlay = ({
  active = false,
  message = 'Loading...'
}: LoaderOverlayPropsType) => {
  if (!active) {
    return null;
  }

  return (
    <div className='overlay' data-testid="overlay-component">
      <div className='spinner-wrapper'>
        <img src={loadingSVG} alt='Loading' className='spinner'/>
        <span className='message' data-testid="overlay-component-message">
          {message}
        </span>
      </div>
    </div>
  );
};

export default LoaderOverlay;
