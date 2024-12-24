import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string; // Required `src` prop for the image source
  alt: string; // Required `alt` prop for accessibility
  width?: string | number; // Optional width for the image
  height?: string | number; // Optional height for the image
  className?: string; // Optional class names for styling
}

const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <img className={`object-cover ${className}`} loading="lazy" {...props} />
  );
};

export default Image;
