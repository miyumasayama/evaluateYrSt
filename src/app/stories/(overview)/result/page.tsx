import React from "react";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import { Buttons } from "@/components/stories/result/buttons";
import { redirect } from "next/navigation";
import { paths } from "@/utils/const";

export default async function Page() {
  const cookieStore = await cookies();
  const content = cookieStore.get("content")?.value
    ? parse(JSON.parse(cookieStore.get("content")?.value ?? ""))
    : "";
  const score = cookieStore.get("score")?.value
    ? parse(JSON.parse(cookieStore.get("score")?.value ?? ""))
    : "";

  if (!content || !score) {
    redirect(paths.stories.create);
  }
  return (
    <div className="px-40 py-10 flex flex-col gap-4 text-slate-100">
      <h1 className="text-slate-50 font-bold text-xl underline decoration-blue-700">
        <span>✨</span>採点結果
      </h1>
      <div>
        <h2 className="text-slate-50 underline font-bold">
          <span>⭐️</span>あなたが生成した文章
        </h2>
        <div>{content}</div>
      </div>
      <div>
        <h2 className="text-slate-50 underline font-bold">
          <span>⭐️</span>評価結果
        </h2>
        <div>{score}</div>
      </div>
      <Buttons />
    </div>
  );
}
