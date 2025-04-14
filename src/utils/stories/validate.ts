import { WordsPresence } from "@/types/stories";

export const checkWordsPresence = (
  words: string[],
  text: string
): WordsPresence => {
  const textList = text.split(" ").map((word) => word.toLowerCase()); // Normalize text to lowercase
  const result: WordsPresence = {};

  words.forEach((word) => {
    result[word] = textList.includes(word.toLowerCase()); // Check if the word is present
  });

  return result; // Return the WordsPresence object
};
