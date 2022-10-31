const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;
const spaceID = process.env.NEXT_CONTENTFUL_SPACE_ID;
const environment_id = "master";
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceID}`;

function getFetchOptions(query) {
  return {
    spaceID: spaceID,
    accessToken: accessToken,
    endpoint: endpoint,
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
}

export async function getBlurb() {
  const query = `
    {
      blurbCollection {
        items {
          sys {
            firstPublishedAt
          }
          blurb
        }
      }
    }
  `;

  return await getData(query);
}

export default async function getData(query) {
  const res = await fetch(endpoint, getFetchOptions(query));
  return res.json();
}
