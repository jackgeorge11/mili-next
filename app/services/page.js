import React from "react";
import getData, { getBlurb } from "../../tools/api";
import Ctas from "../Ctas";
import Frame from "../Frame";
import PageHeader from "../PageHeader";

async function data() {
  const query = `
    {
      servicesCollection {
        items {
          title
          cost
          description
          order
        }
      }
    }
  `;

  const services = await getData(query);

  return services;
}

export default async function Services() {
  const services = await data();

  return (
    <Frame className="services">
      <PageHeader title="Services" />
      {services?.data?.servicesCollection?.items
        ?.sort((a, b) => a.order - b.order)
        .map((s, i) => (
          <React.Fragment key={i}>
            <h2>
              {s.title} {s.cost ? <span className="lora">{s.cost}</span> : null}
            </h2>
            <h3>{s.description}</h3>
          </React.Fragment>
        ))}
      <Ctas learnMore="/testimonials" />
    </Frame>
  );
}
