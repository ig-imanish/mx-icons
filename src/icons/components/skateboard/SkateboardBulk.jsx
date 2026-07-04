import React from "react";
import Icon from "../../Icon";

export default function SkateboardBulk({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M9 15C9 16.1046 8.10457 17 7 17C5.89543 17 5 16.1046 5 15C5 13.8954 5.89543 13 7 13C8.10457 13 9 13.8954 9 15Z" fill="currentColor"/>
      <path d="M19 15C19 16.1046 18.1046 17 17 17C15.8954 17 15 16.1046 15 15C15 13.8954 15.8954 13 17 13C18.1046 13 19 13.8954 19 15Z" fill="currentColor"/>
      <g opacity="0.5">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.58405 6.37604C1.9287 6.14628 2.39435 6.23941 2.62412 6.58405L3.43665 7.80286C4.03942 8.707 5.05417 9.25008 6.14081 9.25008H17.8593C18.946 9.25008 19.9607 8.707 20.5635 7.80285L21.376 6.58405C21.6058 6.23941 22.0715 6.14628 22.4161 6.37604C22.7608 6.60581 22.8539 7.07146 22.6241 7.4161L21.8116 8.6349C20.9306 9.95635 19.4475 10.7501 17.8593 10.7501H6.14081C4.55264 10.7501 3.06954 9.95635 2.18858 8.63491L1.37604 7.4161C1.14628 7.07146 1.23941 6.60581 1.58405 6.37604Z" fill="currentColor"/>
      </g>
    </Icon>
  );
}
