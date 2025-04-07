import { WordsPresence } from "@/types/stories";

export const checkWordsPresence = (words: string[], text: string): WordsPresence => {
  const textList = text.split(" ").map((word) => word.toLowerCase());
  const result: WordsPresence = {};

  words.forEach((word) => {
    result[word] = textList.includes(word.toLowerCase());
  });

  return result;
};