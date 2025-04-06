"use client";
import { Button } from "@/components/commons/button";
import { FC } from "react";

export const Form: FC = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <input
          type="text"
          id="content"
          name="content"
          className="bg-neutral-100 w-full h-100 rounded-md p-2"
        />
      </div>
      <div className="flex gap-4 w-full">
        <Button handleClick={() => {}} color="red">
          削除
        </Button>
        <Button handleClick={() => {}}>完成</Button>
      </div>
    </form>
  );
};
