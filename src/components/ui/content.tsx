"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TextImageProps {
  imageUrl: string;
  text: string;
  title: string;
  reverse?: boolean;
  className?: string;
  textClassName?: string;
  imageClassName?: string;
}

export const TextImage: React.FC<TextImageProps> = ({
  imageUrl,
  text,
  title,
  reverse = false,
  className,
  textClassName,
  imageClassName,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full p-4",
        reverse ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      <div
        className={cn(
          "w-1/2 p-4",
          reverse ? "text-left" : "text-left",
          textClassName
        )}
      >
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <p>{text}</p>
      </div>
      <div className={cn("w-1/2 p-4", imageClassName)}>
        <Image
          alt="image"
          src={imageUrl}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
