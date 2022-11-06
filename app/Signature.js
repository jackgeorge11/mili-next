import Link from "next/link";
import React from "react";
import { getBlurb } from "../tools/api";
import Nav from "./Nav";
import SignatureWrapper from "./SignatureWrapper";

export default async function Signature({ children, page }) {
  const blurb = await getBlurb();
  return (
    <>
      <div className="signature-top">
        <div>
          <h1 className="lora">Maria Ines</h1>
          <h1 className="lora">Life Interiors</h1>
        </div>
        <Link href="/" className="trans-link image-link" passHref={true}>
          <img src="./images/logo.png" alt="" id="about" />
        </Link>
      </div>
      <p>{blurb?.data?.blurbCollection?.items[0].blurb}</p>
    </>
  );
}
