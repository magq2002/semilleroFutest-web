import React from "react";

export default function AnimationWave({ fill, height, width }) {
  return (
    <div
      className="absolute left-0 bottom-0 p-0 w-full md:w-100"
      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // widht="3000"
        width={width}
        // height="400"
        height={height}
        viewBox="0 180 2500 200"
        // fill="#00B694"
        fill={fill}
        className="w-full h-full"
      >
        <path
          className="st1"
          d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250"
        >
          <animate
            attributeName="d"
            dur="5s"
            values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250"
            repeatCount="indefinite"
          ></animate>
        </path>
      </svg>
    </div>
  );
}