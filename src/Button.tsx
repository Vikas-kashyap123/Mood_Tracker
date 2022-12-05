import React, { FC, ReactNode } from "react";

type ButtonProps = {
  theme?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  onClick: any;
  size?: "small" | "medium" | "large";
};

const Button: FC<ButtonProps> = (props) => {
  let themeMap = "bg-gradient-to-r  from-green-500 to-gray-500";
  if (props.theme == "primary") {
    themeMap = "bg-gradient-to-r from-red-800 to-red-200";
  }
  let sizeClass = "";
  switch (props.size) {
    case "small":
      sizeClass = "text-md";
      break;
    case "medium":
      sizeClass = "text-lg";
      break;
    case "large":
      sizeClass = "text-xl";
      break;
  }

  return (
    <button
      onClick={props.onClick}
      className={`rounded-md px-4 text-white hover:scale-110 font-bold py-2 ${props.className} ${themeMap} ${sizeClass} `}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = { theme: "primary" };

export default Button;
