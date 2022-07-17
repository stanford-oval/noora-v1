import React from "react";

export default function DoubleGridBg({ color, showSm }: DoubleGridBgProps) {
  return (
    <div
      className={
        showSm
          ? "block absolute inset-y-0 h-full w-full"
          : "hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      }
      aria-hidden="true"
    >
      <div className="relative h-full max-w-7xl mx-auto">
        <GridPattern
          color={color}
          className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
        />
        <GridPattern
          color={color}
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
        />
      </div>
    </div>
  );
}

function GridPattern({ className, width, height, color }: GridPatternProps) {
  return (
    <svg
      className={
        className
          ? className
          : "absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
      }
      width={width ? width : 404}
      height={height ? height : 784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={color ? color : "text-gray-200"}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={784}
        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
      />
    </svg>
  );
}

type DoubleGridBgProps = {
  color?: string;
  showSm?: boolean;
};

type GridPatternProps = {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
};
