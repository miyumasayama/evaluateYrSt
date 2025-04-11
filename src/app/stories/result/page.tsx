import React from "react";
import { cookies } from "next/headers";
import parse from "html-react-parser";

export default async function Page() {
  const cookieStore = await cookies();
  const content = parse(JSON.parse(cookieStore.get("content")?.value ?? ""));
  const score = parse(JSON.parse(cookieStore.get("score")?.value ?? ""));

  if (!content) {
    return <div className="text-slate-100">No content found in cookies.</div>;
  }

  return (
    <div className="px-40 py-4 flex flex-col gap-4 text-slate-100">
      <h1 className="text-slate-100">Content from Cookie:</h1>
      <div>
        <div>{content}</div>
        <div>{score}</div>
      </div>
    </div>
  );
}
