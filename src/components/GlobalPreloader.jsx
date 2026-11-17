import React, { useState, useEffect } from 'react';
import './GlobalPreloader.scss';

export default function GlobalPreloader({ onFinish, isPageTransition = false }) {
  const [isDrawn, setIsDrawn] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    // Stage 1: Sequential stroke writing completion
    const writeDuration = isPageTransition ? 460 : 660;
    const exitDelay = isPageTransition ? 140 : 200;
    const destroyDelay = isPageTransition ? 220 : 280;

    const drawnTimer = setTimeout(() => {
      setIsDrawn(true);
    }, writeDuration);

    // Stage 2: Smooth scale-out exit
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, writeDuration + exitDelay);

    // Stage 3: Unmount and signal completion
    const destroyTimer = setTimeout(() => {
      setIsDestroyed(true);
      if (onFinish) onFinish();
    }, writeDuration + exitDelay + destroyDelay);

    return () => {
      clearTimeout(drawnTimer);
      clearTimeout(exitTimer);
      clearTimeout(destroyTimer);
    };
  }, [isPageTransition, onFinish]);

  if (isDestroyed) return null;

  return (
    <div
      className={`viha-signature-loader ${isExiting ? 'loader-exit' : ''} ${
        isPageTransition ? 'is-page-transition' : ''
      }`}
      aria-label="Loading VIHA Technologies"
    >
      <div className="loader-center-content">
        {/* Animated Vector Stroke Writing SVG for 'VIHA' */}
        <svg
          className={`viha-write-svg ${isDrawn ? 'is-drawn' : ''}`}
          viewBox="0 0 342 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="loaderBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Letter V */}
          <path
            className="letter-stroke letter-v"
            d="M 30 22 L 65 78 L 100 22"
            pathLength="100"
          />

          {/* Letter I */}
          <path
            className="letter-stroke letter-i"
            d="M 134 22 L 134 78"
            pathLength="100"
          />

          {/* Letter H (Left stem, crossbar, right stem) */}
          <path
            className="letter-stroke letter-h-left"
            d="M 168 22 L 168 78"
            pathLength="100"
          />
          <path
            className="letter-stroke letter-h-cross"
            d="M 168 50 L 208 50"
            pathLength="100"
          />
          <path
            className="letter-stroke letter-h-right"
            d="M 208 22 L 208 78"
            pathLength="100"
          />

          {/* Letter A (Peak legs, crossbar) */}
          <path
            className="letter-stroke letter-a-legs"
            d="M 244 78 L 278 22 L 312 78"
            pathLength="100"
          />
          <path
            className="letter-stroke letter-a-cross"
            d="M 258 56 L 298 56"
            pathLength="100"
          />
        </svg>

        {/* Brand Subtitle Reveal */}
        <div className={`tagline-wrap ${isDrawn ? 'reveal' : ''}`}>
          <span className="brand-subtext">TECHNOLOGIES</span>
          <span className="tech-dot"></span>
        </div>
      </div>
    </div>
  );
}
