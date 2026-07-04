import React from "react";
import Icon from "../../Icon";

export default function WineglassTriangleTwotone({
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
      <path d="M16.2439 21H7.7561M4.70095 3H19.2991C20.7999 3 21.5624 4.79409 20.5162 5.86382L12.7149 13.8404C12.3227 14.2415 11.6773 14.2415 11.2851 13.8404L3.48381 5.86382C2.43759 4.79409 3.20008 3 4.70095 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 14.5713V20.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M7.47314 9.75H16.5268" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
