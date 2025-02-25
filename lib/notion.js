import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getProjects() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId });

  return response.results.map((page) => {
    const properties = page.properties;
    return {
      id: page.id,
      title: properties.Name.title[0]?.text.content || "Untitled",
      category: properties.Category.select?.name || "Uncategorized",
      image: properties.Image.files[0]?.file.url || "/images/placeholder.jpg",
      slug: properties.Slug.rich_text[0]?.text.content || "",
    };
  });
}
