interface IProps {
  width?: number
  height?: number
  classname?: string
}

export function IconSearch({ width = 21, height = 21, classname }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-inherit ${classname}`}
    >
      <path
        d="M10.6473 18.0003C6.27505 18.0003 2.73063 14.4559 2.73063 10.0837C2.73063 5.7114 6.27505 2.16699 10.6473 2.16699C15.0196 2.16699 18.564 5.7114 18.564 10.0837C18.564 14.4559 15.0196 18.0003 10.6473 18.0003Z"
        stroke="inherit"
        strokeWidth="0.959395"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.8973 18.8337L3.56396 17.167"
        stroke="inherit"
        strokeWidth="0.959395"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
