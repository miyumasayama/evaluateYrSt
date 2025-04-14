"use client";
import { Button } from "@/components/commons/button";
import { WordsPresence } from "@/types/stories";
import { FC, useActionState } from "react";
import { evaluateStory, State } from "@/api/stories";

type Props = {
  content: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  wordsPresence: WordsPresence;
};

const initialState: State = { message: null };

export const Form: FC<Props> = ({ content, handleChange, wordsPresence }) => {
  const isSomeFalse = Object.values(wordsPresence).some((value) => !value);
  const [, formAction, isPending] = useActionState(evaluateStory, initialState);
  return (
    <form
      className="flex flex-col items-center gap-4 w-full"
      action={formAction}
    >
      <div className="w-full">
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleChange}
          disabled={isPending}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
          className="bg-neutral-100 w-full h-100 rounded-md p-2 resize-none disabled:opacity-80 disabled:cursor-not-allowed"
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
        <button
          type="submit"
          formAction={formAction}
          className={`w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white font-bold rounded-md transition-colors duration-300 hover:cursor-pointer`}
        >
          完成
        </button>
      </div>
    </form>
  );
};
