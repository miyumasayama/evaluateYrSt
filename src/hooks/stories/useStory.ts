import { WordsPresence } from "@/types/stories";
import { checkWordsPresence } from "@/utils/stories/validate";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

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
    const content = Cookies.get("content");
    const savedWords = Cookies.get("words");
    if (content && savedWords) {
      setContent(JSON.parse(content));
      setWordsPresence(
        checkWordsPresence(JSON.parse(savedWords), JSON.parse(content))
      );
    } else {
      setWordsPresence(
        words.reduce<WordsPresence>((acc, word) => {
          acc[word] = false;
          return acc;
        }, {})
      );
    }
  }, [words]);

  return {
    handleChange,
    content,
    wordsPresence,
    clear,
  };
};
