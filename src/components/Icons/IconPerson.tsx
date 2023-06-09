interface IProps {
  stroke?: string
}

export function IconPerson({ stroke = '#121412' }: IProps) {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6252 13.8151C12.5522 13.8047 12.4585 13.8047 12.3752 13.8151C10.5418 13.7526 9.0835 12.2526 9.0835 10.4089C9.0835 8.52344 10.6043 6.99219 12.5002 6.99219C14.3856 6.99219 15.9168 8.52344 15.9168 10.4089C15.9064 12.2526 14.4585 13.7526 12.6252 13.8151Z"
        stroke={stroke}
        strokeWidth="1.27603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5209 20.6875C17.6667 22.3854 15.2084 23.4167 12.5001 23.4167C9.79175 23.4167 7.33341 22.3854 5.47925 20.6875C5.58341 19.7083 6.20841 18.75 7.323 18C10.1772 16.1042 14.8438 16.1042 17.6772 18C18.7917 18.75 19.4167 19.7083 19.5209 20.6875Z"
        stroke={stroke}
        strokeWidth="1.27603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5002 23.4193C18.2531 23.4193 22.9168 18.7556 22.9168 13.0026C22.9168 7.24964 18.2531 2.58594 12.5002 2.58594C6.7472 2.58594 2.0835 7.24964 2.0835 13.0026C2.0835 18.7556 6.7472 23.4193 12.5002 23.4193Z"
        stroke={stroke}
        strokeWidth="1.27603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
