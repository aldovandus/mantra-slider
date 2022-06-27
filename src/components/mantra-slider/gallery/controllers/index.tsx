import { useStore } from '../../../../zustand/store';

const GalleryControllers = ({
  position,
  onClick,
}: {
  position: 'top' | 'bottom';
  onClick: () => void;
}) => {
  const isShow = useStore((state) =>
    position === 'top'
      ? state.showScrollbarTopIcon
      : state.showScrollbarBottomIcon
  );
  const customStyle = position === 'top' ? { top: 0 } : { bottom: 0 };

  if (!isShow) return null;
  return (
    <div className='gallery-controller' style={customStyle}>
      {position === 'top' && <div onClick={onClick}>&uarr;</div>}
      {position === 'bottom' && <div onClick={onClick}>&darr;</div>}
    </div>
  );
};

export { GalleryControllers };
