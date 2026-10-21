import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global ScrollRevealObserver Component
 * Automatically detects boxed sections and cards across every page and route.
 * Applies subtle fade-in and bottom-to-top reveal animation with progressive stagger.
 */
export default function ScrollRevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Run after DOM has rendered for the current route
    const timeoutId = setTimeout(() => {
      const selector = '.editorial-card, .editorial-card-dark, .editorial-card-yellow, .editorial-card-yellow-bg, .stat-card, [data-scroll-reveal], .scroll-reveal-box';
      const elements = Array.from(document.querySelectorAll(selector));

      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '80px 0px 80px 0px',
          threshold: 0.01,
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('scroll-reveal-box')) {
          el.classList.add('scroll-reveal-box');
        }

        // Apply progressive subtle stagger based on grid/container position
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) =>
            c.matches && c.matches(selector)
          );
          const index = siblings.indexOf(el);
          if (index > 0) {
            const delay = Math.min(index * 70, 280);
            el.style.transitionDelay = `${delay}ms`;
          }
        }

        // Check if already in viewport on load
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight + 80 && rect.bottom >= 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
