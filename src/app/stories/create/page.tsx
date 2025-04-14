"use client";
import { Form } from "@/components/stories/create/form";
import { PageHead } from "@/components/stories/create/page_head";
import { useStory } from "@/hooks/stories/useStory";
import { useWords } from "@/hooks/stories/useWords";

export default function Page() {
  const { words, reset } = useWords();
  const { content, handleChange, wordsPresence, clear } = useStory(words);
  return (
    <div className="px-40 py-4 flex flex-col gap-4">
      <PageHead words={words} reset={reset} />
      <Form
        content={content}
        handleChange={handleChange}
        wordsPresence={wordsPresence}
        clear={clear}
      />
    </div>
  );
}
