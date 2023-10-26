import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BedIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 18V8.5A1.5 1.5 0 0 0 19.5 7h-4A1.5 1.5 0 0 0 14 8.5V18M10 18v-6H4a1 1 0 0 0-1 1v5"
    />
    <Path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12h17v2H3v-1a1 1 0 0 1 1-1Z"
    />
  </Svg>
)
export default BedIcon
