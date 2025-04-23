import { getStories } from "@/api/stories";
import { List } from "@/components/stories/list";
import { NoData } from "@/components/stories/noData";

export default async function Page() {
  const stories = await getStories();
  if (!stories) return <NoData />;
  return (
    <div className="bg-black mt-10">
      <List stories={stories} />
    </div>
  );
}
