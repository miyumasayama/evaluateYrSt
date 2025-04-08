import { FC } from "react";

// plain textで処理するため動的クラスを設定することはできない(https://tailwindcss.com/docs/detecting-classes-in-source-files#dynamic-class-names)
const colors = {
  red: {
    default: "bg-red-600",
    hover: "hover:bg-red-700",
  },
  blue: {
    default: "bg-blue-600",
    hover: "hover:bg-blue-700",
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

export const Button: FC<Props> = ({
  handleClick,
  color = "blue",
  children,
  type,
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={handleClick && handleClick}
      disabled={disabled}
      className={`w-full ${colors[color].default} ${colors[color].hover} px-4 py-2 text-white font-bold rounded-md transition-colors duration-300 hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};
