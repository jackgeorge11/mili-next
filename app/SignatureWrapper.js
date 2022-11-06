"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Nav from "./Nav";

export default function SignatureWrapper({ children }) {
  const path = usePathname();

  if (path && path !== "/") {
    return <div className="signature">{children}</div>;
  } else return null;
}
