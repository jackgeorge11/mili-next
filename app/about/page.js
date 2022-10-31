import Link from "next/link";
import React from "react";
import getData, { getBlurb } from "../../tools/api";
import Ctas from "../Ctas";
import Frame from "../Frame";
import PageHeader from "../PageHeader";

async function data() {
  const query = `
    {
      aboutCollection {
        items {
          sys {
            firstPublishedAt
          }
          description
          image {
            url
          }
        }
      }
    }
  `;

  const about = await getData(query);
  const blurb = await getBlurb();

  return { about, blurb };
}

export default async function About() {
  const { about, blurb } = await data();

  return (
    <Frame className="about">
      <PageHeader title="About" />
      <img src={about.data.aboutCollection.items[0].image.url} alt="" />
      {about?.data?.aboutCollection?.items?.[0]?.description
        .split("\n")
        .map((i, j) => (
          <h3 key={j}>{i}</h3>
        ))}
      <Ctas />
    </Frame>
  );
}
