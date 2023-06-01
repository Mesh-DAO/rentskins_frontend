import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  size?: string;
  color?: string;
  className?: string;
  bold?: number;
  onClick?: () => void;
};

export function Title({
  children,
  onClick,
  color = "black",
  className,
}: Props) {
  return (
    <h1
      onClick={onClick}
      className={classNames(
        "font-inter flex items-center gap-2 transition-all duration-300 ease-in-out",
        {
          "text-white": color === "white",
        },
        className
      )}
    >
      {children}
    </h1>
  );
}
