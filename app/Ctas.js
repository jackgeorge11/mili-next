import Link from "next/link";
import React from "react";

export default function Ctas({ learnMore }) {
  return (
    <div className="ctas">
      <a
        href="https://wa.me/447740644404"
        target="_blank"
        rel="noopener noreferrer"
        className="cta"
      >
        Let's Chat
      </a>
      <Link href={learnMore ? learnMore : "/services"} className="cta">
        Learn More
      </Link>
    </div>
  );
}
