import { FC } from "react";

// plain textで処理するため動的クラスを設定することはできない(https://tailwindcss.com/docs/detecting-classes-in-source-files#dynamic-class-names)
const colors = {
  red: {
    default: "text-red-600",
  },
  blue: {
    default: "text-blue-600",
  },
  green: {
    default: "text-green-600",
  },
  amber: {
    default: "text-amber-600",
  },
};

type Color = keyof typeof colors;

type Props = {
  handleClick?: () => void;
  color?: Color;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const SecondaryButton: FC<Props> = ({
  handleClick,
  color = "blue",
  children,
  type,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick && handleClick}
      disabled={disabled}
      className={`w-full bg-white hover:bg-neutral-300 ${colors[color].default}  border-solid border-2 border-red px-4 py-2 font-bold rounded-md transition-colors duration-300 hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};
