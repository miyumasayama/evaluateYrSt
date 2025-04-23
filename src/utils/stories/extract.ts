export const parseReviews = (text: string) => {
  const scoreMatch = text.match(/<h1>(\d+)\/10<\/h1>/);
  const reviewMatch = text.match(/<p>([\s\S]*?)<\/p>/);

  if (!scoreMatch || !reviewMatch) {
    return {
      score: null,
      review: null,
    };
  }
  return {
    score: Number(scoreMatch[1]),
    review: reviewMatch[1].trim(),
  };
};
