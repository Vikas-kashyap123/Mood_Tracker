import React, { FC, ReactNode } from "react";

type InputProps = { value: number; onChange: any };

const Input: FC<InputProps> = (props) => {
  return (
    <input
      type="number"
      onChange={props.onChange(event)}
      value={props.value}
      className="p-2 rounded-md border border-gray-400"
    />
  );
};

export default Input;
