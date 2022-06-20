import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useStore } from "../../../zustand/store";
import { GalleryControllers } from "./controllers";

const GalleryLayout = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const setScrollbarTopIcon = useStore((state) => state.setScrollbarTopIcon);
  const setScrollbarBottomIcon = useStore(
    (state) => state.setScrollbarBottomIcon
  );

  useLayoutEffect(() => {
    setTimeout(() => {
      const isScrollable = ref.current
        ? ref.current?.scrollHeight > ref.current?.clientHeight
        : false;

      if (isScrollable) {
        setScrollbarTopIcon(true);
        setScrollbarBottomIcon(true);
      }
    }, 400);
  }, []);

  const onScroll = (ev: any) => {
    const max = ev.currentTarget.scrollHeight - ev.currentTarget.clientHeight;

    /*   if (max <= ev.currentTarget.scrollTop) {
      setScrollbarBottomIcon(false);
    } else {
      setScrollbarBottomIcon(true);
    } */

    /* if (ev.currentTarget.scrollTop > 0) {
      setScrollbarTopIcon(true);
    } else {
      setScrollbarTopIcon(false);
    } */
  };

  const onTopClick = () =>
    ref.current?.scrollTo({ top: 0, behavior: "smooth" });
  const onBottomClick = () =>
    ref.current?.scrollTo({
      top: 1000,
      behavior: "smooth",
    });

  return (
    <div ref={ref} onScroll={onScroll} className="gallery">
      <GalleryControllers onClick={onTopClick} position="top" />
      {children}
      <GalleryControllers onClick={onBottomClick} position="bottom" />
    </div>
  );
};

export { GalleryLayout };
