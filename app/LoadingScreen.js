"use client";

import React, { useEffect, useState } from "react";
import sleep from "../tools/sleep";

export default function LoadingScreen() {
  const [loader, setLoader] = useState("loading-screen");

  useEffect(() => {
    async function fader() {
      await sleep(1000);
      setLoader("loading-screen fading");
      await sleep(600);
      setLoader("loading-screen fading gone");
    }

    fader();
  }, []);

  return (
    <div className={loader}>
      <h2>
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
      </h2>
    </div>
  );
}
