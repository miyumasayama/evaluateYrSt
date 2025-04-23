import { getStories } from "@/api/stories";

export default async function Page() {
  const stories = await getStories();
  console.log(stories);
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center gap-4"></div>
  );
}
