import React from "react";
import Icon from "../../Icon";

export default function Closet2Broken({
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
      <path d="M19 22V20.5M5 22V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 20V18M12 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C21.7715 17.8853 21.9554 16.4796 21.9913 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
