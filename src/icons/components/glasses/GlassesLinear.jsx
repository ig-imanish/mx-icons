import React from "react";
import Icon from "../../Icon";

export default function GlassesLinear({
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
      <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 16.2137L13.3441 15.9797C12.4749 15.6695 11.5252 15.6695 10.6559 15.9797L10 16.2137" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 16L2.76315 7.60532C2.87807 6.34121 2.93553 5.70916 3.30554 5.24199C3.67554 4.77482 4.27763 4.57412 5.48181 4.17273L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 16L21.2368 7.60532C21.1219 6.34121 21.0645 5.70916 20.6945 5.24199C20.3245 4.77482 19.7224 4.57412 18.5182 4.17273L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
