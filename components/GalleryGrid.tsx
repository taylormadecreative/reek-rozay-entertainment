"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  showFilters?: boolean;
  maxImages?: number;
}

export default function GalleryGrid({
  images,
  showFilters = false,
  maxImages,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const displayImages = maxImages
    ? filteredImages.slice(0, maxImages)
    : filteredImages;

  return (
    <>
      {/* Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm uppercase tracking-[0.15em] px-5 py-2.5 rounded-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "bg-transparent text-brand-cream/60 border-white/10 hover:border-brand-gold/30 hover:text-brand-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Grid */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {displayImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                layout: { duration: 0.4 },
              }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`relative overflow-hidden rounded-sm ${
                  image.span === "tall"
                    ? "aspect-[3/4]"
                    : image.span === "wide"
                    ? "aspect-[4/3]"
                    : image.orientation === "portrait"
                    ? "aspect-[3/4]"
                    : image.orientation === "square"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                {/* REPLACE: Client event photo */}
                <div className="placeholder-image absolute inset-0">
                  <span>{image.alt}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="bg-brand-black/70 backdrop-blur-sm rounded-sm px-3 py-2">
                    <p className="font-body text-xs text-brand-gold uppercase tracking-wider">
                      {image.category}
                    </p>
                  </div>
                </div>

                {/* Zoom effect */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-brand-cream/60 hover:text-brand-gold transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                {/* REPLACE: Client event photo (full size) */}
                <div className="placeholder-image absolute inset-0">
                  <span className="!text-lg">{selectedImage.alt}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between">
                <p className="font-body text-sm text-brand-cream/60">
                  {selectedImage.alt}
                </p>
                <p className="label-accent text-[10px]">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
