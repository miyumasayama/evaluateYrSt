"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { paths } from "@/utils/const";
import { useRouter } from "next/navigation";

export default function ReloadChecker() {
  const router = useRouter();
  useEffect(() => {
    const content = Cookies.get("content");
    if (!content) return;
    const nav = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const isReload = nav?.type === "reload";

    if (isReload) {
      const shouldDelete = window.confirm(
        "前回情報は削除され、新規入力ページに遷移します。よろしいですか？"
      );
      if (shouldDelete) {
        Cookies.remove("content", { path: paths.stories.root });
        Cookies.remove("reviews", { path: paths.stories.root });
        Cookies.remove("words", { path: paths.stories.root });
        router.push(paths.stories.create);
      }
    }
  }, [router]);

  return null;
}
