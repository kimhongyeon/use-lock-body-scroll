import { useEffect, useRef } from 'react';

type Options = {
  /**
   * The delay to unlock the body scroll. Default is 0ms. milliseconds.
   */
  lockDelay?: number;
  /**
   * Reset body scroll when locking. Default is false.
   */
  resetBodyScrollWhenLocking?: boolean;
};

const useLockBodyScroll = (
  isLock: boolean,
  { lockDelay = 0, resetBodyScrollWhenLocking = false }: Options = {}
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
      if (!resetBodyScrollWhenLocking) {
        document.body.style.removeProperty('top');
      }

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
        if (!resetBodyScrollWhenLocking) {
          document.body.style.top = `-${lastScrollYRef.current}px`;
        }
      }, lockDelay);
    } else {
      release();
    }

    return release;
  }, [isLock]);
};

export default useLockBodyScroll;
