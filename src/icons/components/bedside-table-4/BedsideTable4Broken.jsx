import React from "react";
import Icon from "../../Icon";

export default function BedsideTable4Broken({
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
      <path d="M12 20V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 12V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 12V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12V10C22 6.22876 22 4.34315 20.8284 3.17157C19.8853 2.22849 18.4796 2.04456 16 2.00869" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 8H5M22 8H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
