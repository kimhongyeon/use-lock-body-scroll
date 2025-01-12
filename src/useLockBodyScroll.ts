import { useEffect, useRef } from 'react';

type Options = {
  /*
   * The delay to lock the body scroll. Default is 200ms. milliseconds.
   */
  lockDelay?: number;
};

const useLockBodyScroll = (
  isLock: boolean,
  { lockDelay = 0 }: Options = {}
) => {
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const release = () => {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('width');
      document.body.style.removeProperty('top');

      setTimeout(() => {
        window.scrollTo(0, lastScrollYRef.current);
      }, 0);
    };

    if (isLock) {
      lastScrollYRef.current = window.scrollY;

      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${lastScrollYRef.current}px`;
      }, lockDelay);
    } else {
      release();
    }

    return release;
  }, [isLock]);
};

export default useLockBodyScroll;
