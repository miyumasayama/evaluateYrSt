import { FC } from "react";

type Props = {
  words: string[];
}

export const PageHead: FC<Props> = ({words}) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-50">Create Your Story With 3 Words</h1>
      <div>
        {words.map((noun, index) => (
          <h2 key={index} className="text-slate-50 font-bold">
            ・ {noun}
          </h2>
        ))}
      </div>
    </>
  )
}