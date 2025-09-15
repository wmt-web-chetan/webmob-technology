import { HERO_SECTION_FRAGMENT } from "./sectionsQuery/Home/heroSection";

export async function getPageData(slug) {
  const res = await fetch("https://api.webmob.webmobtech.biz/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query { 
        pageBy(uri: "${slug}") { 
          title
          slug
          pageBuilder { 
            pageBuilder { 
              ${HERO_SECTION_FRAGMENT}
              
            } 
          } 
        } 
      }`,
      variables: { slug },
    }),
    next: { revalidate: 60 },
  });

  return res.json();
}
