"use client";
import { createStory } from "@/api/stories";
import { Button } from "@/components/commons/button";
import { WordsPresence } from "@/types/stories";
import { FC } from "react";

type Props = {
  content: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  wordsPresence: WordsPresence;
};

export const Form: FC<Props> = ({ content, handleChange, wordsPresence }) => {
  const isSomeFalse = Object.values(wordsPresence).some((value) => !value); 
  return (
    <form className="flex flex-col items-center gap-4 w-full">
      <div className="w-full">
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleChange}
          className="bg-neutral-100 w-full h-100 rounded-md p-2 resize-none"
        />
      </div>
      {isSomeFalse && (
        <div className="text-red-500 text-sm">
          すべての単語が含まれていません。
        </div>
      )}
      <div className="flex gap-4 w-full">
        <Button handleClick={() => {}} color="red">
          削除
        </Button>
        <Button handleClick={createStory}>完成</Button>
      </div>
    </form>
  );
};
