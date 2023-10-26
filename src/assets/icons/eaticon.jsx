import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const EatIcon = (props) => (
<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.86 4a16 16 0 0 1 9.528 3.044c.113.082.17.123.18.185.009.062-.034.119-.12.232l-9.213 12.227c-.108.143-.162.215-.236.216-.074 0-.13-.07-.24-.212L7.334 7.628c-.087-.112-.131-.168-.123-.23.009-.062.065-.104.177-.189a16 16 0 0 1 9.472-3.208Z"
    />
    <Path
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.887 7a13 13 0 0 1 7.695 2.44c.113.082.17.122.18.185.01.062-.033.119-.119.232l-7.408 9.83c-.108.144-.162.216-.236.217-.074 0-.13-.07-.24-.212l-7.578-9.7c-.087-.112-.131-.168-.123-.23.009-.063.065-.105.177-.188A13 13 0 0 1 16.887 7Z"
    />
    <Mask
      id="a"
      width={20}
      height={16}
      x={7}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path
        fill="#33363F"
        d="M26.448 7.461c.086-.113.129-.17.12-.232-.01-.062-.067-.103-.18-.185a16 16 0 0 0-19 .165c-.112.085-.168.127-.177.189-.008.062.036.118.123.23l9.425 12.064c.11.142.166.212.24.212.074-.001.128-.073.236-.216L26.448 7.46Z"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#33363F"
        fillRule="evenodd"
        d="M12 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export default EatIcon
