import React from "react";
import Icon from "../../Icon";

export default function SmartphoneRotateOrientationBroken({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M2 14V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H9C11.8284 22 13.2426 22 14.1213 21.1213C15 20.2426 15 18.8284 15 16V8C15 5.17157 15 3.75736 14.1213 2.87868C13.2426 2 11.8284 2 9 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.5 10.0068C19.3597 10.0337 20.414 10.1717 21.1213 10.879C22 11.7577 22 13.1719 22 16.0003C22 18.8287 22 20.243 21.1213 21.1216C20.414 21.829 19.3597 21.9669 17.5 21.9938" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 18V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 17.5C10 18.3284 9.32843 19 8.5 19C7.67157 19 7 18.3284 7 17.5C7 16.6716 7.67157 16 8.5 16C9.32843 16 10 16.6716 10 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20.5 6.98598L22 8C22 4.98532 19.8377 2.48275 17 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
