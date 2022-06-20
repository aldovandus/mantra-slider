import { useStore } from '../../../zustand/store';
import { GalleryLayout } from './gallery-layout';
import { MantraImage } from '../mantra-image';

const FullScreenGallery = () => {
  const data = useStore((state) => state.data);
  const images = data.map((image, index) => (
    <MantraImage index={index}>
      <img src={image.src} />
    </MantraImage>
  ));
  return <GalleryLayout>{images}</GalleryLayout>;
};

export { FullScreenGallery };
