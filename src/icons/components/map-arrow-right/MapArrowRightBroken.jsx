import React from "react";
import Icon from "../../Icon";

export default function MapArrowRightBroken({
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
      <path d="M14 16.5974L21.0072 13.4725C22.3309 12.8822 22.3309 11.1178 21.0072 10.5275L4.49746 3.16496C3.00163 2.49789 1.45007 3.97914 2.19099 5.36689L5.34302 11.2706C5.58818 11.7298 5.58817 12.2702 5.34302 12.7294L2.19099 18.6331C1.45006 20.0209 3.00163 21.5021 4.49746 20.835L9.24873 18.7162" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
