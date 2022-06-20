import React, { useLayoutEffect, useRef } from 'react';
import { useSSR } from '../../hooks/useSSR';
import { getPositions } from '../../utils/getPositions';
import { useStore } from '../../zustand/store';
import { FullScreenImage } from './full-screen-image/full-screen-image';
import { GalleryLayout } from './gallery/gallery-layout';

const SCALE_RATE = 0.25;
const ZOOM_SCALE = 1.5;

const MainImage = ({ children }: { children: React.ReactNode }) => {
  const data = useStore(
    (state) => state.data.map(state.keyExtractor)[state.currentImageIndex]
  );
  const setFullScreen = useStore((state) => state.setFullScreen);
  const mainImageRef = useRef<HTMLImageElement>(null);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (useStore.getState().isZoomEnabled) {
      const { x, y } = getPositions(event, SCALE_RATE);

      if (mainImageRef.current)
        mainImageRef.current.style.transform = `scale(${ZOOM_SCALE}) translate(${x}px, ${y}px)`;
    }
  };

  const onMouseEnter = () => {
    if (mainImageRef.current) mainImageRef.current.classList.add('mouse-enter');
  };

  const onMouseLeave = () => {
    if (mainImageRef.current) mainImageRef.current.style.transform = 'scale(1)';
    if (mainImageRef.current)
      mainImageRef.current.classList.remove('mouse-enter');
  };

  const onClick = () => {
    setFullScreen(true);
  };
  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className='main-image'
      onClick={onClick}>
      {data && <img ref={mainImageRef} src={data} />}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}>
        {children}
      </div>
    </div>
  );
};

interface Props {
  children?: React.ReactNode;
  initialImageIndex?: number;
  data: any;
  isZoomEnabled?: boolean;
  renderItem?(item: any, index: number): React.ReactNode;
  keyExtractor: (item: any) => string;
}

const MantraSlider = ({
  children,
  initialImageIndex = 0,
  renderItem,
  isZoomEnabled = true,
  keyExtractor,
  data,
}: Props) => {
  const isSSR = useSSR();

  useLayoutEffect(() => {
    useStore.setState({
      keyExtractor,
      data,
      isZoomEnabled,
      currentImageIndex:
        initialImageIndex < React.Children.count(children)
          ? Math.trunc(initialImageIndex)
          : 0,
    });
  }, []);

  if (!data || !isSSR) return null;

  return (
    <>
      <FullScreenImage />
      <div className='root'>
        {renderItem && (
          <GalleryLayout>
            {data.map((item: any, index: number) => renderItem(item, index))}
          </GalleryLayout>
        )}
        <MainImage>{children}</MainImage>
      </div>
    </>
  );
};

export { MantraSlider };
