"use client";

import React, { useState } from "react";
import Frame from "../Frame";
import PageHeader from "../PageHeader";

export default function Page() {
  const [revealed, setRevealed] = useState(false);

  return (
    <Frame className="contact">
      <PageHeader title="Contact" />
      <h2>For inquiries, contact me via phone or email.</h2>
      {revealed ? (
        <h3 class="reveal lora thick">
          <a
            href="https://wa.me/447740644404"
            target="_blank"
            rel="noopener noreferrer"
          >
            +44 7740 644404 (WhatsApp)
          </a>
          <span class="spacer"></span>
          <a href="mailto:ines@mariaineslifeinteriors.com">
            ines@mariaineslifeinteriors.com
          </a>
        </h3>
      ) : (
        <h3 class="reveal lora thick" onClick={() => setRevealed(true)}>
          Click here to reveal contact information
        </h3>
      )}
    </Frame>
  );
}
