import React from "react";
import Icon from "../../Icon";

export default function BugLinear({
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
      <path d="M19 15V11.9375C19 9.76288 17.2371 8 15.0625 8H8.9375C6.76288 8 5 9.76288 5 11.9375V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16.5 8.5V7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5V8.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 14H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 14H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14.5 3.5L17 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.5 3.5L7 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20.5 20.0002L18.5 19.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20.5 7.9998L18.5 8.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3.5 20.0002L5.5 19.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3.5 7.9998L5.5 8.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 21.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
