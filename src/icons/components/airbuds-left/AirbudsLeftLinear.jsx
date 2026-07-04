import React from "react";
import Icon from "../../Icon";

export default function AirbudsLeftLinear({
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
      <path d="M2 18.6667V19.5C2 20.8807 3.11929 22 4.5 22C5.88071 22 7 20.8807 7 19.5V18.6667M2 18.6667V7.625L2.00007 7.55936C2.01591 4.49563 4.49563 2.01591 7.55936 2.00007L7.625 2L7.66438 2.00004C9.50262 2.00954 10.9905 3.49738 11 5.33562L11 5.375V8C11 9.65685 9.65685 11 8 11C7.44772 11 7 11.4477 7 12V18.6667M2 18.6667H7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 5V8" stroke="currentColor" strokeWidth="1.67647" strokeLinecap="round"/>
      <circle cx="5.5" cy="5.5" r="5.5" transform="matrix(-1 0 0 1 21 11)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 14V19H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0009 5.09961C15.96 5.49729 17.5032 7.04046 17.9009 8.99959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
