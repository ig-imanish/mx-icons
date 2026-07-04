import React from "react";
import Icon from "../../Icon";

export default function RouteLinear({
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
      <path d="M6.14214 6.14214C8.90356 3.38071 10.2843 2 12 2C13.7157 2 15.0964 3.38071 17.8579 6.14214C20.6193 8.90356 22 10.2843 22 12C22 13.7157 20.6193 15.0964 17.8579 17.8579C15.0964 20.6193 13.7157 22 12 22C10.2843 22 8.90356 20.6193 6.14214 17.8579C3.38071 15.0964 2 13.7157 2 12C2 10.2843 3.38071 8.90356 6.14214 6.14214Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 11.5L13.3333 9M16 11.5L13.3333 14M16 11.5L10.6667 11.5C9.77778 11.5 8 12 8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
