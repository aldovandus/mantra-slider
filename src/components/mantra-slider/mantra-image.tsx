import React, { useCallback, useEffect, useRef } from "react";
import { useStore } from "../../zustand/store";

interface Props {
  children: React.ReactNode;
  index: number;
  itemSelectedClassName?: string;
}

const MantraImage: React.FC<Props> = ({
  children,
  index,
  itemSelectedClassName = "gallery-item-selected",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const currentImageIndex = useRef(useStore.getState().currentImageIndex);
  const setCurrentImageIndex = useStore((state) => state.setCurrentImageIndex);

  const setGalleryStyle = (currentImageIndex: number) => {
    const style = ref.current?.style;
    if (style)
      if (index === currentImageIndex) {
        ref.current.classList.add(itemSelectedClassName);
      } else {
        ref.current.classList.remove(itemSelectedClassName);
      }
  };

  useEffect(() => {
    useStore.subscribe((state) => {
      currentImageIndex.current = state.currentImageIndex;
      setGalleryStyle(currentImageIndex.current);
    });
  }, []);

  const setCurrentImage = useCallback(() => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <div
      ref={ref}
      className="mantra-gallery-image"
      onMouseEnter={setCurrentImage}
      onClick={setCurrentImage}
    >
      {children}
    </div>
  );
};
export { MantraImage };
