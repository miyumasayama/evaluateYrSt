"use client";
import { WordsPresence } from "@/types/stories";
import { FC, useActionState, useEffect } from "react";
import { evaluateStory, State } from "@/api/stories";
import { useRouter } from "next/navigation";
import { paths } from "@/utils/const";

type Props = {
  content: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  wordsPresence: WordsPresence;
  clear: () => void;
  words: string[];
};

const initialState: State = { message: null };

export const Form: FC<Props> = ({
  content,
  handleChange,
  wordsPresence,
  clear,
  words,
}) => {
  const router = useRouter();
  const isSomeFalse = Object.values(wordsPresence).some((value) => !value);
  const [state, formAction, isPending] = useActionState(
    evaluateStory,
    initialState
  );

  useEffect(() => {
    if (state.message) {
      localStorage.setItem("words", JSON.stringify(words));
      router.push(paths.stories.result);
    }
  }, [router, state, words]);

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
        <button
          onClick={(e) => {
            e.preventDefault();
            clear();
          }}
          className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 text-white font-bold rounded-md transition-colors duration-300 hover:cursor-pointer"
        >
          削除
        </button>
        <button
          type="submit"
          formAction={formAction}
          disabled={isPending || isSomeFalse || content.length === 0}
          className={`w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white font-bold rounded-md transition-colors duration-300 hover:cursor-pointer disabled:bg-blue-300 disabled:text-gray-200 disabled:cursor-not-allowed`}
        >
          完成
        </button>
      </div>
    </form>
  );
};
