import { useRef } from 'react';
import { useStore } from '../../../zustand/store';
import CrossIcon from '../../cross-icon';
import { FullScreenGallery } from '../gallery';
import { FullScreenImageLayout } from './full-screen.image-layout';

const MainImageFullScreen = () => {
  const mainRef = useRef<HTMLImageElement>(null);

  const currentImage = useStore((state) => state.data[state.currentImageIndex]);
  const setFullScreenZoomed = useStore((state) => state.setFullScreenZoomed);

  const onClick = () => {
    if (mainRef?.current) {
      const el = mainRef.current;

      const fullscreenZoomed = useStore.getState().fullscreenZoomed;
      if (window.innerWidth > 500) {
        if (!fullscreenZoomed) {
          el.classList.add('is-zoomed');
        } else {
          el.classList.remove('is-zoomed');
        }
      }

      setFullScreenZoomed(!fullscreenZoomed);
    }
  };

  return (
    <div className='fullscreen-main-image-container'>
      <img src={currentImage?.src} ref={mainRef} onClick={onClick} />
    </div>
  );
};

const FullScreenImage = () => {
  const setFullScreen = useStore((state) => state.setFullScreen);

  const onCrossIconClick = () => {
    setFullScreen(false);
    window.scrollTo(0, 0);
  };

  return (
    <FullScreenImageLayout>
      <div onClick={onCrossIconClick} className='close-icon'>
        <CrossIcon />
      </div>

      <FullScreenGallery />

      <MainImageFullScreen />
    </FullScreenImageLayout>
  );
};

export { FullScreenImage };
