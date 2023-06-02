import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  color?: string;
  className?: string;
  bold?: 100 | 400 | 600 | 700 | 800 | 900;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  onClick?: () => void;
};

export function Title({
  children,
  onClick,
  color = "black",
  className,
  bold = 400,
  size = "md"
}: Props) {
  return (
    <h1
      onClick={onClick}
      className={classNames(
        `font-inter flex items-center gap-2 transition-all duration-300 ease-in-out`,
        {
          "text-white": color === "white",
        },
        {
          "text-xs": size === "xs"
        },
        {
          "text-sm": size === "sm"
        },
        {
          "text-md": size === "md"
        },
        {
          "text-lg": size === "lg"
        },
        {
          "text-xl": size === "xl"
        },
        {
          "text-2xl": size === "2xl"
        },
        {
          "font-thin": bold === 100
        },
        {
          "font-normal": bold === 400
        },
        {
          "font-semibold": bold === 600
        },
        {
          "font-bold": bold === 700
        },
        {
          "font-extrabold": bold === 800
        },
        {
          "font-black": bold === 900
        },
        className
      )}
    >
      {children}
    </h1>
  );
}
