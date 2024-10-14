"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "left", // changed to left for sliding
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "left" | "right"; // modified direction options
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, [images]);

  const loadImages = () => {
    const loadPromises = images.map((image) => {
      const img = new Image();
      img.src = image;
      return new Promise<void>((resolve) => {
        img.onload = () => resolve();
      });
    });

    Promise.all(loadPromises)
      .then(() => setLoadedImages(images))
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      x: "100%", // start off to the right
      opacity: 0,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: direction === "left" ? "-100%" : "100%", // slide out to the left or right
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
    >
      {loadedImages.length > 0 && children}
      {loadedImages.length > 0 && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-10", overlayClassName)}
        />
      )}

      {loadedImages.length > 0 && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
