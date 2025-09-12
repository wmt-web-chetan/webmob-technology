export async function getBlogDetails(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query { 
        postBy(uri: "${slug}") {
    title
    slug
    content
    author {
      node {
        slug
        name
        avatar {
          url
        }
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
