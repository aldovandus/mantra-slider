import { useStore } from '../../../zustand/store';
import { GalleryLayout } from './gallery-layout';
import { MantraImage } from '../mantra-image';

const FullScreenGallery = () => {
  const data = useStore((state) => state.data.map(state.keyExtractor));
  const images = data.map((image, index) => (
    <MantraImage key={index} index={index}>
      <img src={image} />
    </MantraImage>
  ));
  return <GalleryLayout>{images}</GalleryLayout>;
};

export { FullScreenGallery };
