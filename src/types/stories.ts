export type WordsPresence = Record<string, boolean>;

export type Story = {
  id: string;
  content: string;
  words: string[];
  score: number;
  review: string;
};
