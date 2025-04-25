import { FC } from "react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

type Props = {
  words: string[];
  reset: () => void;
};

export const PageHead: FC<Props> = ({ words, reset }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-slate-50">
          ３つの単語を使用してオリジナルの物語を書いてみよう
        </h1>
        <p className="text-red-600 text-xs">
          ※半角文字を使用してください。。文字を正しく検出できない可能性があります。
        </p>
      </div>
      <div>
        <ArrowPathIcon
          onClick={() => {
            reset();
          }}
          className="h-5 w-5 text-blue-300 hover:text-slate-400 transition-colors duration-300 hover:cursor-pointer"
        />
        {words.map((noun, index) => (
          <h2 key={index} className="text-slate-50 font-bold">
            ・ {noun}
          </h2>
        ))}
      </div>
    </>
  );
};
