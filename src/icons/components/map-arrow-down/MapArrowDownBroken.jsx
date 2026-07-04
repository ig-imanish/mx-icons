import React from "react";
import Icon from "../../Icon";

export default function MapArrowDownBroken({
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
      <path d="M16.5974 14L13.4725 21.0072C12.8822 22.3309 11.1178 22.3309 10.5275 21.0072L3.16496 4.49746C2.49789 3.00163 3.97914 1.45007 5.36689 2.19099L11.2706 5.34302C11.7298 5.58818 12.2702 5.58817 12.7294 5.34302L18.6331 2.19099C20.0209 1.45006 21.5021 3.00163 20.835 4.49746L18.7162 9.24873" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
