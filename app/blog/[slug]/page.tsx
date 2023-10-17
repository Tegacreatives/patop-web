import { RichText } from "@graphcms/rich-text-react-renderer";
import { EmbedReferences, RichTextContent } from "@graphcms/rich-text-types";
import Image from "next/image";

async function getBlog(slug: string) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT as RequestInfo, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Blog($slug: String!) {
            blog(where: {slug: $slug}) {
                id
                slug
                publishedAt
                title
                coverPhoto {
                  url
                }
                content{
                    markdown
                    json
                }
                
            }
        }`,
      variables: {
        slug: slug,
      },
    }),
  });
  const data = await res.json();
  return data.data.blog;
}

type blogType = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  coverPhoto: {
    url: string;
  };
  content: {
    json: RichTextContent;
    references: EmbedReferences;
  };
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blogData: blogType = await getBlog(params.slug);
  const normalDate = new Date(blogData.publishedAt);
  const formattedDate = normalDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" ">
      <main className="prose w-full py-10 px-5 mx-auto max-w-[90vw] md:max-w-[60vw]">
        <h1 className="text-2xl md:text-4xl font-bold">{blogData.title}</h1>
        <h3 className="text-sm text-gray-500 py-2">{formattedDate}</h3>
        <div className="w-[full] h-[40vh] md:h-[60vh] my-10 relative">
          <Image src={blogData.coverPhoto.url} alt={blogData.title} fill />
        </div>
        {blogData.content && (
          <RichText
            content={blogData?.content?.json}
            references={blogData?.content?.references}
            renderers={{
              h3: ({ children }) => (
                <h1 className=" pt-3 text-2xl">{children}</h1>
              ),
            }}
          />
        )}
      </main>
    </div>
  );
};

export default Blog;
