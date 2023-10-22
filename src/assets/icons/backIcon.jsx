import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#2D3648"
      d="M10.59 4.756a.833.833 0 0 0-1.18-1.179L3.578 9.411a.833.833 0 0 0 0 1.178l5.834 5.834a.833.833 0 0 0 1.178-1.179l-4.41-4.41h9.654a.833.833 0 1 0 0-1.667H6.18l4.41-4.411Z"
    />
  </Svg>
)
export default BackIcon
