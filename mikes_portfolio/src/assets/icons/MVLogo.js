import React from "react"

const MVLogo = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="44" cy="44" r="43" stroke={color} stroke-width="2" />
      <path
        d="M27.2534 48.5V62H20V25L44 62L68 25V62H60.7339V48.5M29 26.5L44 48.5L59 26.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default MVLogo
