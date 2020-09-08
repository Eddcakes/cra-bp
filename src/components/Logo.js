import React from "react";
//idea from https://codesandbox.io/s/vvzkzwvp10

const Logo = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 128 128"
}) => (
  //is there a way to make the height depend on the nav height?
  <svg
    className="logo-svg"
    height="40"
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      opacity="1"
      fill="#00a8ff"
      fillOpacity="1"
      stroke="#00a8ff"
      strokeWidth="2"
      strokeOpacity="1"
      d="M37.78 93.69L93.52 93.69L86.71 65.72L45.94 65.02L37.78 93.69Z"
    />
    <path
      opacity="1"
      fill="#ff006f"
      fillOpacity="1"
      d="M59.43 2.45L41.67 6L32.79 29.09L36.35 64.61L59.43 66.38L77.19 66.38L94.95 64.61L98.51 29.09L89.63 6L71.87 2.45L59.43 2.45Z"
    />
    <path
      opacity="1"
      fill="#00a8ff"
      fillOpacity="1"
      stroke="#00a8ff"
      strokeWidth="2"
      strokeOpacity="1"
      d="M93.52 93.69L37.78 93.69L42.42 115.67L88.88 115.67L93.52 93.69Z"
    />
    <path
      opacity="1"
      fill="#fff"
      fillOpacity="1"
      stroke="#000"
      strokeWidth="0"
      strokeOpacity="1"
      d="M53.04 8.4L53.41 23.19L42.17 32.81L34.85 23.96L41.57 8.88L53.04 8.4Z"
    />
    <path
      opacity="1"
      fill="#fff"
      fillOpacity="1"
      stroke="#000"
      strokeWidth="0"
      strokeOpacity="1"
      d="M78.33 8.4L77.96 23.19L89.2 32.81L96.52 23.96L89.8 8.88L78.33 8.4Z"
    />
    <path
      opacity="1"
      fill="#000"
      fillOpacity="1"
      d="M46.12 17.52L44.34 20.6L42.14 19.33L43.92 16.25L46.12 17.52Z"
    />
    <path
      opacity="1"
      fill="#000"
      fillOpacity="1"
      d="M86.52 17.52L88.3 20.6L90.5 19.33L88.72 16.25L86.52 17.52Z"
    />
    <path
      opacity="1"
      fill="#00a8ff"
      fillOpacity="1"
      stroke="#00a8ff"
      strokeWidth="1"
      strokeOpacity="1"
      d="M111.91 92.16L89.6 83.81L89.6 125.55L111.91 125.55L111.91 92.16Z"
    />
    <path
      opacity="1"
      fill="#00a8ff"
      fillOpacity="1"
      stroke="#00a8ff"
      strokeWidth="1"
      strokeOpacity="1"
      d="M19.59 92.16L41.89 83.81L41.89 125.55L19.59 125.55L19.59 92.16Z"
    />
    <path
      opacity="1"
      fill="#00a8ff"
      fillOpacity="1"
      stroke="#00a8ff"
      strokeWidth="0"
      strokeOpacity="1"
      d="M85.39 48.86L75.52 33.64L55.78 33.64L45.91 48.86L55.78 64.08L75.52 64.08L85.39 48.86Z"
    />
  </svg>
);

export default Logo;
