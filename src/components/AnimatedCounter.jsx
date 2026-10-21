import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component
 * Counts up from 0 to target number when scrolled into view.
 * Supports integers, floating points, and formatted numbers.
 */
export default function AnimatedCounter({ value, duration = 1600, className = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const stringValue = String(value ?? '');
  const isFloat = stringValue.includes('.');
  const decimalPlaces = isFloat ? (stringValue.split('.')[1] || '').length : 0;

  const numericMatch = stringValue.match(/[0-9]+(\.[0-9]+)?/);
  const parsedNumber = numericMatch ? parseFloat(numericMatch[0]) : NaN;
  const isNumeric = !isNaN(parsedNumber);

  useEffect(() => {
    if (!isNumeric) return;

    const startCounting = () => {
      if (hasAnimated) return;
      setHasAnimated(true);

      let startTime = null;
      const startValue = 0;
      const endValue = parsedNumber;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic: 1 - (1 - progress)^3
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = startValue + (endValue - startValue) * easeOut;

        if (isFloat) {
          setDisplayValue(current.toFixed(decimalPlaces));
        } else {
          setDisplayValue(Math.floor(current));
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(isFloat ? endValue.toFixed(decimalPlaces) : endValue);
        }
      };

      window.requestAnimationFrame(step);
    };

    if (!elementRef.current) return;

    // Check if already in viewport
    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      startCounting();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { rootMargin: '40px 0px 40px 0px', threshold: 0.05 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [parsedNumber, isNumeric, duration, hasAnimated, isFloat, decimalPlaces]);

  if (!isNumeric) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? displayValue : 0}
    </span>
  );
}
