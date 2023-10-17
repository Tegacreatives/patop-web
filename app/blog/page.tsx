import Image from "next/image";
import Link from "next/link";
import React from "react";

// Get all the courses
async function getCourses() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT as RequestInfo, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
         query Blogs {
           blogs {
           createdAt
           id
           publishedAt
           slug
           title
           updatedAt
           coverPhoto {
           url
        }
      }
    }
     `,
    }),
  });
  const json = await response.json();

  return json.data.blogs;
}

type blogType = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  coverPhoto: {
    url: string;
  };
};

const BlogPage = async () => {
  const blogs: blogType[] = await getCourses();
  console.log(blogs);
  return (
    <main className="w-full py-10 px-10 md:px-20 mx-auto max-w-[2180px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-20 md:space-y-0 mx-auto">
        {blogs.map((blog) => {
          const normalDate = new Date(blog.publishedAt);
          const formattedDate = normalDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <div
              className="mx-auto w-[80vw] h-[250px] md:w-[280px] md:h-[230px] xl:w-[390px] xl:h-[320px]"
              key={blog.id}
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className=" w-full h-full relative rounded-lg">
                  <Image
                    src={blog.coverPhoto.url}
                    alt={blog.title}
                    fill
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-sm text-gray-500 py-2">{formattedDate}</h3>
                <h2 className="font-semibold line-clamp-2 text-xl text-gray-700">
                  {blog.title}
                </h2>
              </Link>{" "}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BlogPage;
