import { WordsPresence } from "@/types/stories";
import { checkWordsPresence } from "@/utils/stories/validate";
import { useEffect, useState } from "react";

export const useStory = (words: string[]) => {
  const [content, setContent] = useState<string>("");
  const [wordsPresence, setWordsPresence] = useState<WordsPresence>(() =>
    words.reduce<WordsPresence>((acc, word) => {
      acc[word] = false;
      return acc;
    }, {})
  );
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setWordsPresence(checkWordsPresence(words, e.target.value));
  };

  const clear = () => {
    setContent("");
    setWordsPresence(
      words.reduce<WordsPresence>((acc, word) => {
        acc[word] = false;
        return acc;
      }, {})
    );
  };

  useEffect(() => {
    setWordsPresence(
      words.reduce<WordsPresence>((acc, word) => {
        acc[word] = false;
        return acc;
      }, {})
    );
  }, [words]);

  return {
    handleChange,
    content,
    wordsPresence,
    clear,
  };
};
