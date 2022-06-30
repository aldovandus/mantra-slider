import React, { useRef } from 'react';
import { GalleryControllers } from './controllers';

const GalleryLayout = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  /*  const onScroll = (ev: any) => {
    const max = ev.currentTarget.scrollHeight - ev.currentTarget.clientHeight;

    if (max <= ev.currentTarget.scrollTop) {
      setScrollbarBottomIcon(false);
    } else {
      setScrollbarBottomIcon(true);
    }

    if (ev.currentTarget.scrollTop > 0) {
      setScrollbarTopIcon(true);
    } else {
      setScrollbarTopIcon(false);
    }
  }; */

  const onTopClick = () =>
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' });
  const onBottomClick = () =>
    ref.current?.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });

  return (
    <div ref={ref} className='gallery'>
      <GalleryControllers onClick={onTopClick} position='top' />
      {children}
      <GalleryControllers onClick={onBottomClick} position='bottom' />
    </div>
  );
};

export { GalleryLayout };
