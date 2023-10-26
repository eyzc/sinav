import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RepeatIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      stroke="#292929"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m24 10 2 2m0 0-2 2m2-2H12M10 24l-2-2m0 0 2-2m-2 2h14"
    />
    <Path
      stroke="#292929"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 16a4 4 0 0 1 4-4M26 18a4 4 0 0 1-4 4"
    />
  </Svg>
)
export default RepeatIcon
