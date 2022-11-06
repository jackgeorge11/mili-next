"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav({ isHome }) {
  const path = usePathname();
  const page = path.replace("/", "");
  return (
    <nav className={isHome ? "in--sig" : !page || page === "/" ? "home" : ""}>
      <Link
        href="/services"
        passHref={true}
        className={page === "services" ? "is--active" : ""}
      >
        services
      </Link>
      <Link
        href="/testimonials"
        passHref={true}
        className={page === "testimonials" ? "is--active" : ""}
      >
        testimonials
      </Link>
      <Link
        href="/about"
        passHref={true}
        className={page === "about" ? "is--active" : ""}
      >
        about
      </Link>
      <Link
        href="/contact"
        passHref={true}
        className={page === "contact" ? "is--active" : ""}
      >
        contact
      </Link>
    </nav>
  );
}
