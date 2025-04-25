import { getStories } from "@/api/stories";
import { List } from "@/components/stories/list";
import { NoData } from "@/components/stories/noData";
import { Paging } from "@/components/stories/paging";
import { limit } from "@/utils/stories/const";

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const offset = (page - 1) * limit;
  const { data: stories, total } = await getStories(offset);

  if (!stories) return <NoData />;
  return (
    <div className="bg-black mt-10">
      <List stories={stories} />
      <Paging currentPage={page} total={total} />
    </div>
  );
}
