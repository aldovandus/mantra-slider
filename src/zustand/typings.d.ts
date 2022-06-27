interface StoreState {
  keyExtractor: (item: any) => string;
  currentImageIndex: number;
  fullscreen: boolean;
  fullscreenZoomed: boolean;
  isControllersEnabled: boolean;
  showScrollbarBottomIcon: boolean;
  showScrollbarTopIcon: boolean;
  isOnMouseEnterEnabled: boolean;
  isZoomEnabled: boolean;
  mainImageHeight: number | null;
  data: PicturesViewerData[];

  setMainImageHeight: (height: number) => void;
  setCurrentImageIndex: (index: number) => void;
  setFullScreen: (fullscreen: boolean) => void;
  setFullScreenZoomed: (zoomed: boolean) => void;
  setScrollbarTopIcon: (show: boolean) => void;
  setScrollbarBottomIcon: (show: boolean) => void;
}

export { StoreState };
