"use client";
import { FC } from "react";

type Props = {
  handleClick: () => void;
  text: string;
};

export const Button: FC<Props> = ({ handleClick, text }) => {
  return (
    <button className="" onClick={() => handleClick()}>
      {text}
    </button>
  );
};
