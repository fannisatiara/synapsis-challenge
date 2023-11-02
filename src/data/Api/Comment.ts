export async function getComments(params: string) {
  const res = await fetch(
    `https://gorest.co.in/public/v2/posts/${params}/comments`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
