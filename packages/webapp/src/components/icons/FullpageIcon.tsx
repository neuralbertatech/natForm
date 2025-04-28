import type { FC } from 'react'

export const FullpageIcon: FC<IComponentProps<HTMLOrSVGElement>> = props => (
  <svg viewBox="0 0 219 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0.47699" y="12.9384" width="218.238" height="187.062" fill="#BFDBFE" />
    <path
      d="M4.47699 0.5H214.715C216.648 0.5 218.215 2.06701 218.215 4V12.4384H0.97699V4C0.97699 2.06701 2.54399 0.5 4.47699 0.5Z"
      fill="#F4F4F4"
      stroke="#F2F2F2"
    />
    <rect x="6.08881" y="4.20886" width="4.36477" height="4.36477" rx="2.18238" fill="#D8D8D8" />
    <rect x="15.1302" y="4.20886" width="4.36477" height="4.36477" rx="2.18238" fill="#D8D8D8" />
    <rect x="24.1714" y="4.20886" width="4.36477" height="4.36477" rx="2.18238" fill="#D8D8D8" />
  </svg>
)
