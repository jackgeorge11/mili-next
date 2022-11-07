import Link from "next/link";
import React from "react";
import { getBlurb } from "../tools/api";

export default async function Home() {
  const blurb = await getBlurb();
  return (
    <div className="home-wrapper">
      <h1 className="lora">Maria Ines Life Interiors</h1>
      <h3>{blurb?.data?.blurbCollection?.items[0].blurb}</h3>
      <div className="ctas">
        <Link href="/services" className="cta" passHref={true}>
          View Services
        </Link>
        <Link href="/testimonials" className="cta" passHref={true}>
          Read Testimonials
        </Link>
        <Link href="/about" className="cta" passHref={true}>
          Learn More
        </Link>
        <Link href="/contact" className="cta" passHref={true}>
          Get in Touch
        </Link>
      </div>
      <div className="ctas">
        <a
          className="cta mini"
          href="https://www.instagram.com/mariaineslifeinteriors/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="cta mini"
          href="https://www.yelp.com/biz/maria-ines-life-interiors-richmond?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yelp
        </a>
      </div>
      <img src="./images/logo.png" alt="" id="about" />
    </div>
  );
}
