"use client";
import { SecondaryButton } from "@/components/commons/secondaryButton";
import { FC } from "react";
import Cookies from "js-cookie";
import { paths } from "@/utils/const";
import { useRouter } from "next/navigation";
import { createStory } from "@/api/stories";

export const Buttons: FC = () => {
  const router = useRouter();
  const handleEdit = () => {
    Cookies.remove("reviews", { path: paths.stories.root });
    router.push(paths.stories.create);
  };

  const handleCreateNew = () => {
    const confirmed = window.confirm(
      "結果は削除されます。本当に最初からやり直しますか？"
    );
    if (confirmed) {
      Cookies.remove("content", { path: paths.stories.root });
      Cookies.remove("reviews", { path: paths.stories.root });
      Cookies.remove("words", { path: paths.stories.root });
      router.push(paths.stories.create);
    }
  };

  const handlePublish = async () => {
    const content = Cookies.get("content");
    const reviews = Cookies.get("reviews");
    const words = Cookies.get("words");
    if (!content || !reviews || !words) return;
    // TODO: データがなかった場合の処理
    try {
      const data = await createStory(
        JSON.parse(reviews),
        JSON.parse(content),
        JSON.parse(words)
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="flex gap-4 mt-20 w-1/2">
      <SecondaryButton color="green" handleClick={handleEdit}>
        修正する
      </SecondaryButton>
      <SecondaryButton handleClick={handleCreateNew}>
        新しく作成する
      </SecondaryButton>
      <SecondaryButton color="amber" handleClick={handlePublish}>
        公開する
      </SecondaryButton>
    </div>
  );
};
