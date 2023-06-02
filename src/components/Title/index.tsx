import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "xs" | "lg" | "2xl" | "3xl";
  color?: string;
  className?: string;
  bold?: null | 700 | 900 | 600;
  onClick?: () => void;
};

export function Title({
  children,
  onClick,
  size = "md",
  color = "black",
  className,
  bold = null,
}: Props) {
  return (
    <h1
      onClick={onClick}
      className={classNames(
        `${className} flex items-center gap-2 transition-all duration-300 ease-in-out font-inter`,
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
          "text-3xl": size === "3xl",
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
          "font-semibold": bold === 600,
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
          "text-alt-steam-button": color === "green",
        }
      )}
    >
      {children}
    </h1>
  );
}
