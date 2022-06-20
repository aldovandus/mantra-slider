import React from 'react';
interface Props {
    children?: React.ReactNode;
    initialImageIndex?: number;
    data: any;
    isZoomEnabled?: boolean;
    renderItem?(item: any, index: number): React.ReactNode;
    keyExtractor: string;
}
declare const MantraSlider: ({ children, initialImageIndex, renderItem, isZoomEnabled, keyExtractor, data, }: Props) => JSX.Element | null;
export { MantraSlider };
