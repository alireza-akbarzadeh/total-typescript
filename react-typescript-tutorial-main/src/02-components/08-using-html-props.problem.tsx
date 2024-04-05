import { ButtonHTMLAttributes, ComponentProps } from "react";
/*
 * this is ony to get all html element
 * type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
 */

export const Button = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
