"use client";

import { useEffect, useRef, useState } from "react";

export default function Gallery({ photos, title = "Gallery" }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  };

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, []);

  const scrollByPage = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  if (!photos || photos.length === 0) return null;

  return (
    <section className="gallery" aria-label={title}>
      <div className="section-inner">
        <div className="gallery-header">
          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-arrow"
              aria-label="Previous photos"
              disabled={atStart}
              onClick={() => scrollByPage(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-arrow"
              aria-label="Next photos"
              disabled={atEnd}
              onClick={() => scrollByPage(1)}
            >
              ›
            </button>
          </div>
        </div>
        <ul
          className="gallery-track"
          ref={trackRef}
          onScroll={updateEnds}
          tabIndex={0}
        >
          {photos.map((photo) => (
            <li key={photo.src} className="gallery-slide">
              <figure>
                <img src={photo.src} alt={photo.alt || ""} loading="lazy" />
                {photo.caption && <figcaption>{photo.caption}</figcaption>}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
