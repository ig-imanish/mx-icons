import React from "react";
import Icon from "../../Icon";

export default function Widget3Linear({
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
      <path d="M2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 17.5C13.5 15.2909 15.2909 13.5 17.5 13.5C19.7091 13.5 21.5 15.2909 21.5 17.5C21.5 19.7091 19.7091 21.5 17.5 21.5C15.2909 21.5 13.5 19.7091 13.5 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M21.5 6.5C21.5 4.29086 19.7091 2.5 17.5 2.5C15.2909 2.5 13.5 4.29086 13.5 6.5C13.5 8.70914 15.2909 10.5 17.5 10.5C19.7091 10.5 21.5 8.70914 21.5 6.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 17.5C10.5 15.2909 8.70914 13.5 6.5 13.5C4.29086 13.5 2.5 15.2909 2.5 17.5C2.5 19.7091 4.29086 21.5 6.5 21.5C8.70914 21.5 10.5 19.7091 10.5 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
