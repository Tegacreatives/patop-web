import { createUploadthing, type FileRouter } from "uploadthing/next";
import getCurrentUser from "@/app/actions/getCurrentUser";

const f = createUploadthing();

const handleAuth = async () => {
  const currentUser = await getCurrentUser();
  const id = currentUser;
  if (!currentUser) throw new Error("Unauthorized");

  return { id };
};

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  projectImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  projectAttachment: f(["text", "image"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
