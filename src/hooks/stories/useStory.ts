import { WordsPresence } from "@/types/stories";
import { checkWordsPresence } from "@/utils/stories/validate";
import { useState } from "react";

export const useStory = (words: string[]) => {
  const [content, setContent] = useState<string>('');
  const [wordsPresence, setWordsPresence] = useState<WordsPresence>(
    () =>
      words.reduce((acc, word) => {
        acc[word] = false;
        return acc;
      }, {} as WordsPresence)
  );
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setWordsPresence(checkWordsPresence(words, e.target.value));
  }

  return {
    handleChange,
    content,
    wordsPresence
  }
}