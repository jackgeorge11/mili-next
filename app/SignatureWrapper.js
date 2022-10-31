"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function SignatureWrapper({ children }) {
  const path = usePathname();

  return (
    <div className={!path || path === "/" ? "signature home" : "signature"}>
      {children}
    </div>
  );
}
