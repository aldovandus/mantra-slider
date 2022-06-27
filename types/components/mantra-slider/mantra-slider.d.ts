import React from 'react';
interface Props {
    children?: React.ReactNode;
    initialImageIndex?: number;
    data: any;
    isZoomEnabled?: boolean;
    isControllersEnabled?: boolean;
    renderItem?(item: any, index: number): React.ReactNode;
    keyExtractor: (item: any) => string;
}
declare const MantraSlider: ({ children, initialImageIndex, renderItem, isZoomEnabled, keyExtractor, data, isControllersEnabled, }: Props) => JSX.Element | null;
export { MantraSlider };
