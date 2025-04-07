import { FC } from "react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

type Props = {
  words: string[];
  reset: () => void;
}

export const PageHead: FC<Props> = ({words, reset}) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-50">Create Your Story With 3 Words</h1>
      <div>
        <ArrowPathIcon 
          onClick={() => {reset()}}
          className="h-5 w-5 text-blue-300 hover:text-slate-400 transition-colors duration-300 hover:cursor-pointer" />
        {words.map((noun, index) => (
          <h2 key={index} className="text-slate-50 font-bold">
            ・ {noun}
          </h2>
        ))}
      </div>
    </>
  )
}