"use client";
import { SecondaryButton } from "@/components/commons/secondaryButton";
import { FC } from "react";
import Cookies from "js-cookie";
import { paths } from "@/utils/const";
import { useRouter } from "next/navigation";

export const Buttons: FC = () => {
  const router = useRouter();
  const handleEdit = () => {
    Cookies.remove("score", { path: paths.stories.root });
    router.push(paths.stories.create);
  };

  const handleCreateNew = () => {
    const confirmed = window.confirm(
      "結果は削除されます。本当に最初からやり直しますか？"
    );
    if (confirmed) {
      Cookies.remove("content", { path: paths.stories.root });
      Cookies.remove("score", { path: paths.stories.root });
      Cookies.remove("words", { path: paths.stories.root });
      router.push(paths.stories.create);
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
    </div>
  );
};
