import Script from "next/script";
import React from "react";

export default function Canvas({ children }) {
  return (
    <>
      <Script src="./Gradient.js" />
      <canvas id="gradient-canvas" data-transition-in></canvas>
      {children}
    </>
  );
}
