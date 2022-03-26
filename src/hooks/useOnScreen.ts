import { MutableRefObject, useEffect, useState } from 'react';

export function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = '0px'): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin },
    );

    if (current) {
      observer.observe(current);
    }
    return () => {
      observer.unobserve(current);
    };
  });

  return isIntersecting;
}
