import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number; // Percentage of element that needs to be visible to trigger animation
  root?: Element | null; // Root element (default is viewport)
  rootMargin?: string; // Margin around the root (default is '0px')
  once?: boolean; // Whether to trigger animation only once
}

export const useScrollAnimation = (
  className: string,
  options: ScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    once = true,
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial state (hidden)
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';

            // If once is true, unobserve after animation triggers
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // If not once, animate out when not in view
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [className, threshold, root, rootMargin, once]);

  return elementRef;
};

export default useScrollAnimation;