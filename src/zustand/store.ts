import create from 'zustand';
import { StoreState } from './typings';

const useStore = create<StoreState>((set) => ({
  keyExtractor: (item) => item.id,
  data: [],
  currentImageIndex: 0,
  fullscreen: false,
  fullscreenZoomed: false,
  showScrollbarBottomIcon: false,
  showScrollbarTopIcon: false,
  isOnMouseEnterEnabled: true,
  isZoomEnabled: true,
  mainImageHeight: null,

  setMainImageHeight: (height: number) =>
    set(() => ({
      mainImageHeight: height,
    })),

  setCurrentImageIndex: (index: number) =>
    set(() => ({
      currentImageIndex: index,
    })),

  setFullScreen: (fullscreen: boolean) =>
    set(() => ({
      fullscreen,
    })),

  setScrollbarTopIcon: (show: boolean) =>
    set(() => ({
      showScrollbarTopIcon: show,
    })),

  setScrollbarBottomIcon: (show: boolean) =>
    set(() => ({
      showScrollbarBottomIcon: show,
    })),

  setIsOnMouseEnterEnabled: (value: boolean) =>
    set(() => ({
      isOnMouseEnterEnabled: value,
    })),

  setFullScreenZoomed: (value: boolean) =>
    set(() => ({
      fullscreenZoomed: value,
    })),
}));

export { useStore };
