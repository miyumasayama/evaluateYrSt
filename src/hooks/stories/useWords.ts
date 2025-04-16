import { useEffect, useState } from "react";
import { fakerJA as faker } from "@faker-js/faker";

export const useWords = () => {
  const [words, setWords] = useState<string[]>([]);

  const getWords = () => {
    const newWords = [faker.word.noun(), faker.word.noun(), faker.word.noun()];
    setWords(newWords);
  };

  useEffect(() => {
    const savedWords = localStorage.getItem("words");
    console.log(savedWords);
    if (savedWords) {
      setWords(JSON.parse(savedWords));
    } else {
      getWords();
    }
  }, []);

  return {
    words,
    reset: getWords,
  };
};
