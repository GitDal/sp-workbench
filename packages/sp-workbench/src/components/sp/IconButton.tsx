import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  className?: string;
  icon: ReactNode;
  onClick?: () => void;
};

export function IconButton(props: Props) {
  return (
    <div
      className={clsx(
        props.className,
        "h-12 w-12",
        "hover:cursor-pointer",
        "flex justify-center items-center"
      )}
      onClick={props.onClick}
    >
      {props.icon}
    </div>
  );
}
