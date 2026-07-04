import React from "react";
import Icon from "../../Icon";

export default function MapArrowRightTwotone({
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
      <path d="M5.52689 12C5.52689 11.7501 5.4656 11.5002 5.34302 11.2706L2.19099 5.36689C1.45006 3.97914 3.00163 2.49789 4.49746 3.16496L21.0072 10.5275C21.6691 10.8226 22 11.4113 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M5.52689 12C5.52689 12.2499 5.4656 12.4998 5.34302 12.7294L2.19099 18.6331C1.45006 20.0209 3.00163 21.5021 4.49746 20.835L21.0072 13.4725C21.6691 13.1774 22 12.5887 22 12" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
