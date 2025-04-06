import { Form } from "@/components/stories/create/form";
import { randomNouns } from "@/utils/stories/words";

export default async function Page() {
    console.log(randomNouns)
  return (
    <div className="p-4">
      <Form /> 
    </div>
  );
}
