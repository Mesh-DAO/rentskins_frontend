interface IProps {
  width?: number
  height?: number
  fill?: string
  stroke?: string
}

export function IconShield({
  width = 20,
  height = 23,
  fill = 'none',
  stroke = 'white',
}: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 23"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9101 10.6203C18.9101 15.5103 15.3601 20.0903 10.5101 21.4303C10.1801 21.5203 9.82008 21.5203 9.49008 21.4303C4.64008 20.0903 1.09009 15.5103 1.09009 10.6203V6.23028C1.09009 5.41028 1.7101 4.48028 2.4801 4.17028L8.05008 1.89031C9.30008 1.38031 10.7101 1.38031 11.9601 1.89031L17.5301 4.17028C18.2901 4.48028 18.9201 5.41028 18.9201 6.23028L18.9101 10.6203Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
