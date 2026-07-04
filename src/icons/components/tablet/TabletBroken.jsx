import React from "react";
import Icon from "../../Icon";

export default function TabletBroken({
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
      <path d="M12 4L10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.11466 19.7715 5.52043 19.9554 8 19.9913M16 4.00869C18.4796 4.04456 19.8853 4.22849 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 17H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
