import { useEffect, useMemo, useRef } from 'react';
import { useStore } from '../../../zustand/store';

const FullScreenImageLayout: React.FC = ({ children }) => {
  const fullScreen = useStore((state) => state.fullscreen);

  const setFullScreen = useStore((state) => state.setFullScreen);
  const body = useRef(document.body); // replace with body

  const style: React.CSSProperties | undefined = useMemo(
    () =>
      fullScreen
        ? {
            visibility: 'visible',
            opacity: 1,
          }
        : {
            visibility: 'hidden',
            opacity: 0,
          },
    [fullScreen]
  );

  useEffect(() => {
    if (body.current) {
      body.current.style.overflowY = fullScreen ? 'hidden' : 'auto';
    }

    const unsubscribe = window.addEventListener('popstate', function () {
      /* If history changes close fullscreen mode and reset body style */
      if (body.current) body.current.style.overflowY = 'auto';
      if (fullScreen) setFullScreen(false);
    });

    return unsubscribe;
  }, [fullScreen]);

  return (
    <div className='full-screen-image-layout' style={style}>
      {fullScreen ? children : null}
    </div>
  );
};

export { FullScreenImageLayout };
