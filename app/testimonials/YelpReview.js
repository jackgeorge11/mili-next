"use client";

import Script from "next/script";
import React from "react";

export default function YelpReview({ id }) {
  return (
    <span class="yelp-review" data-review-id={id} data-hostname="www.yelp.com">
      <Script
        src="https://www.yelp.com/embed/widgets.js"
        type="text/javascript"
        async
      ></Script>
    </span>
  );
}
