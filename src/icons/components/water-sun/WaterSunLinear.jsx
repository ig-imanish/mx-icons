import React from "react";
import Icon from "../../Icon";

export default function WaterSunLinear({
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
      <path d="M22 16.7728C20.4123 16.3987 19.5955 15.4796 18.9199 14.4574C18.4965 13.8168 17.5655 13.8558 17.1055 14.4706C16.0541 15.8762 14.4844 17.0004 12 17.0004C9.49345 17.0004 7.91806 15.57 6.86651 14.2239C6.42721 13.6616 5.58617 13.6691 5.20168 14.2702C4.50078 15.366 3.68402 16.376 2 16.7728" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 21.7728C20.4123 21.3987 19.5955 20.4796 18.9199 19.4574C18.4965 18.8168 17.5655 18.8558 17.1055 19.4706C16.0541 20.8762 14.4844 22.0004 12 22.0004C9.49345 22.0004 7.91806 20.57 6.86651 19.2239C6.42721 18.6616 5.58617 18.6691 5.20168 19.2702C4.50078 20.366 3.68402 21.376 2 21.7728" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.9171 11C17.441 8.16229 14.973 6 12 6C9.02705 6 6.55909 8.16229 6.08301 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.0703 4.92969L18.6775 5.32252" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.32227 5.32227L4.92943 4.92943" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
