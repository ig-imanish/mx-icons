import React from "react";
import Icon from "../../Icon";

export default function SpeedometerLowBroken({
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
      <path d="M19 19L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 5L17.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 19L6.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 5L6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.9998 12L21.9998 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 4.00021L12 2.00021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.7781 14.364C14.9497 13.1924 14.9497 11.2929 13.7781 10.1214C12.6065 8.94978 10.707 8.94978 9.53545 10.1214C9.0898 10.567 8.77857 11.4921 8.56396 12.4675C8.24305 13.926 8.08259 14.6553 8.66339 15.2361C9.24419 15.8169 9.97346 15.6564 11.432 15.3355C12.4073 15.1209 13.3324 14.8096 13.7781 14.364Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 21.5422C4.94289 20.2679 2 16.4776 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 16.4776 19.0571 20.2679 15 21.5422" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
