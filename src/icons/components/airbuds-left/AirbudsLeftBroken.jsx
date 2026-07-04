import React from "react";
import Icon from "../../Icon";

export default function AirbudsLeftBroken({
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
      <path d="M2 18.6667V19.5C2 19.6393 2 19.7089 2.00295 19.7678C2.06342 20.973 3.02697 21.9366 4.23224 21.997C4.29108 22 4.36072 22 4.5 22C4.63928 22 4.70892 22 4.76776 21.997C5.97302 21.9366 6.93657 20.973 6.99705 19.7678C7 19.7089 7 19.6393 7 19.5V18.6667M2 18.6667H7M2 18.6667L2.00295 13M7 18.6667V12C7 11.4477 7.44771 11 8 11C9.65685 11 11 9.65685 11 8V5.375L11 5.33562C10.9905 3.49738 9.50262 2.00954 7.66438 2.00004L7.625 2L7.55936 2.00007C4.49563 2.01591 2.0159 4.49563 2.00007 7.55936L2 7.625L2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 5V8" stroke="currentColor" strokeWidth="1.67647" strokeLinecap="round"/>
      <path d="M15.5 11C12.4624 11 10 13.4624 10 16.5C10 19.5376 12.4624 22 15.5 22C18.5376 22 21 19.5376 21 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 14V19H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0009 5.09961C15.96 5.49729 17.5032 7.04046 17.9009 8.99959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
