/// <reference types="react" />
declare const GalleryControllers: ({ position, onClick, }: {
    position: "top" | "bottom";
    onClick: () => void;
}) => JSX.Element | null;
export { GalleryControllers };
