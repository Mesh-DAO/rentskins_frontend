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
  size = "md",
  color = "black",
  className,
  bold = 500,
}: Props) {
  return (
    <h1
      onClick={onClick}
      className={classNames(
        `${className} font-Roboto flex items-center gap-2 transition-all duration-300 ease-in-out`,
        {
          "text-xs": size === "xs",
        },
        {
          "text-md": size === "md",
        },
        {
          "text-lg": size === "lg",
        },
        {
          "text-2xl": size === "2xl",
        },
        {
          "text-sm": size === "sm",
        },
        {
          "font-bold": bold === 700,
        },
        {
          "font-black": bold === 900,
        },
        {
          "text-black": color === "black",
        },
        {
          "text-gray-500": color === "gray",
        },
        {
          "text-[#1682FD]": color === "blue",
        },
        {
          "text-white": color === "white",
        },
        {
          "text-brand-red": color === "red",
        }
      )}
    >
      {children}
    </h1>
  );
}
