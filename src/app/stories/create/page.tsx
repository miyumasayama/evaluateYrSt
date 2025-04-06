import { Form } from "@/components/stories/create/form";
import { PageHead } from "@/components/stories/create/page_head";
import { randomNouns } from "@/utils/stories/words";

export default async function Page() {
  return (
    <div className="px-40 py-4 flex flex-col gap-4">
      <PageHead words={randomNouns} />
      <Form /> 
    </div>
  );
}
