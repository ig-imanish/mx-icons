import React from "react";
import Icon from "../../Icon";

export default function MirrorLeftLinear({
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
      <path d="M12 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H12" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2.5 3"/>
      <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
