import React from 'react';
interface Props {
    children?: React.ReactNode;
    initialImageIndex?: number;
    data: any;
    isZoomEnabled?: boolean;
    hasControllers?: boolean;
    renderItem?(item: any, index: number): React.ReactNode;
    keyExtractor: (item: any) => string;
}
declare const MantraSlider: ({ children, initialImageIndex, renderItem, isZoomEnabled, keyExtractor, data, hasControllers, }: Props) => JSX.Element | null;
export { MantraSlider };
