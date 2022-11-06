import Link from "next/link";
import React from "react";
import getData from "../../tools/api";
import Frame from "../Frame";
import PageHeader from "../PageHeader";
import YelpReview from "./YelpReview";

async function data() {
  const query = `
    query {
      testimonialCollection {
        items {
          name
          review
          order
          dataReviewId
        }
      }
    }
  `;

  const { data } = await getData(query);

  return data;
}

export default async function Page() {
  const { testimonialCollection } = await data();

  return (
    <Frame className="testimonials">
      <PageHeader title="Testimonials" />
      {testimonialCollection?.items
        ?.sort((a, b) => a.order - b.order)
        ?.map((t, i) => {
          if (t.dataReviewId) {
            return (
              <div className="yelp-wrapper" key={i}>
                <YelpReview id={t.dataReviewId} />
              </div>
            );
          } else if (t.review && t.name) {
            return (
              <div className="testimonial" key={i}>
                {t.review.split("\n").map((l, i) => (
                  <h3 key={i}>{l}</h3>
                ))}
                <p className="lora">{t.name}</p>
              </div>
            );
          }
        })}
      <h2 className="lora">Leave me a review:</h2>
      <div className="ctas">
        <a
          className="cta"
          href="mailto:ines@mariaineslifeinteriors.com"
          passHref={true}
        >
          via Email
        </a>
        <a
          href="https://www.yelp.com/biz/maria-ines-life-interiors-richmond"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          on Yelp
        </a>
      </div>
    </Frame>
  );
}
