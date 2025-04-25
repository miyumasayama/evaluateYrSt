import { Story } from "@/types/stories";
import { FC } from "react";

type Props = {
  stories: Story[];
};

export const List: FC<Props> = ({ stories }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-100">
        📚 みんなの書いた物語
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse rounded-2xl overflow-hidden bg-white text-black">
          <thead>
            <tr className="bg-blue-100 text-blue-800 border-b border-blue-300">
              <th className="text-left px-4 py-2 w-4/10 border-r border-blue-300">
                指定単語
              </th>
              <th className="text-left px-4 py-2 w-5/10 border-r border-blue-300">
                お話
              </th>
              <th className="text-left px-4 py-2 w-1/10">スコア</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story.id} className="border-t border-blue-200">
                <td className="px-4 py-3 border-r border-blue-200">
                  {story.words?.join(" ") ?? "-"}
                </td>
                <td className="px-4 py-3 border-r border-blue-200 ">
                  {story.content}
                </td>

                <td className="px-4 py-3">{story.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
