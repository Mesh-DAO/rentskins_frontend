interface IProps {
  className?: string
}

export function IconLocation({ className }: IProps) {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 14.4922C14.2949 14.4922 15.75 13.0371 15.75 11.2422C15.75 9.44726 14.2949 7.99219 12.5 7.99219C10.7051 7.99219 9.25 9.44726 9.25 11.2422C9.25 13.0371 10.7051 14.4922 12.5 14.4922Z"
        stroke="inherit"
        strokeWidth="1.24345"
      />
      <path
        d="M3.77094 9.34636C5.82302 0.325523 19.1876 0.33594 21.2293 9.35677C22.4272 14.6484 19.1355 19.1276 16.2501 21.8984C14.1564 23.9193 10.8439 23.9193 8.73969 21.8984C5.86469 19.1276 2.57302 14.638 3.77094 9.34636Z"
        stroke="inherit"
        strokeWidth="1.24345"
      />
    </svg>
  )
}
