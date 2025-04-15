"use client";
import { PrimaryButton } from "@/components/commons/primaryButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-white font-bold text-6xl">
        <span className="text-red-600">C</span>reate{" "}
        <span className="text-blue-600">Y</span>our{" "}
        <span className="text-red-600">S</span>tory
      </h1>
      <h2 className="text-white font-bold">
        〜オリジナルの物語を作って採点してみよう〜
      </h2>
      <div>
        <PrimaryButton handleClick={() => router.push("/stories/create")}>
          書いてみる
        </PrimaryButton>
      </div>
    </div>
  );
}
