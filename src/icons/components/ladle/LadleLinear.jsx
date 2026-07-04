import React from "react";
import Icon from "../../Icon";

export default function LadleLinear({
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
      <path d="M2 5.68421C2 3.64948 3.64948 2 5.68421 2C7.71894 2 9.36842 3.64948 9.36842 5.68421V14.6316V15.6842C9.36842 19.1723 12.1961 22 15.6842 22C19.1723 22 22 19.1723 22 15.6842V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 14.5C22 15.8807 19.0539 17 16 17C12.9461 17 9.5 15.8807 9.5 14.5C9.5 13.1193 12.9461 12 16 12C19.0539 12 22 13.1193 22 14.5Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
