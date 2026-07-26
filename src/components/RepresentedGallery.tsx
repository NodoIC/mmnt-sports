"use client";

import { useState } from "react";
import Image from "next/image";

const GALLERY_ALT = "Futbolista representado por Goals For Players";
const INITIAL_COUNT = 8;

function PhotoCard({ photo, delay }: { photo: string; delay: number }) {
  return (
    <div
      className="hover-lift animate-fade-in-up group relative aspect-square overflow-hidden rounded-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src={`/players/${photo}`}
        alt={GALLERY_ALT}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
      />
    </div>
  );
}

export default function RepresentedGallery({ photos }: { photos: string[] }) {
  const [expanded, setExpanded] = useState(false);

  const initialPhotos = photos.slice(0, INITIAL_COUNT);
  const extraPhotos = photos.slice(INITIAL_COUNT);
  const hasMore = extraPhotos.length > 0;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {initialPhotos.map((photo, index) => (
          <PhotoCard key={photo} photo={photo} delay={140 + index * 60} />
        ))}
      </div>

      {hasMore && (
        <div
          className={`grid overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            expanded
              ? "mt-4 max-h-[4000px] opacity-100 sm:mt-5"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {extraPhotos.map((photo, index) => (
              <PhotoCard key={photo} photo={photo} delay={140 + index * 60} />
            ))}
          </div>
        </div>
      )}

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="hover-lift inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:border-orange-500 hover:text-orange-700"
          >
            {expanded ? "Mostrar menos" : "Ver todos los representados"}
          </button>
        </div>
      )}
    </>
  );
}
