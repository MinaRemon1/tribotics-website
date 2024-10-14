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
  direction = "left",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "left" | "right";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setIsMounted(true); // Set to true after the component mounts
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [autoplay]);

  const slideVariants = {
    initial: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { x: direction === "left" ? "-100%" : "100%", opacity: 0, transition: { duration: 0.5 } },
  };

  // Only render the slider after the component has mounted
  if (!isMounted) return null;

  return (
    <div className={cn("overflow-hidden h-full w-full relative flex items-center justify-center", className)}>
      {children}
      {overlay && (
        <div className={cn("absolute inset-0 bg-black/60 z-10", overlayClassName)} />
      )}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]} // Ensure images are optimized
          initial="initial"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="image h-full w-full absolute inset-0 object-cover object-center"
          loading="lazy" // Enable lazy loading
        />
      </AnimatePresence>
    </div>
  );
};
