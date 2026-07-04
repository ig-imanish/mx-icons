import React from "react";
import Icon from "../../Icon";

export default function PieChartTwotone({
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
      <path opacity="0.5" d="M20 15.5524C18.8263 19.2893 15.3351 22 11.2108 22C6.12383 22 2 17.8762 2 12.7892C2 8.66488 4.71065 5.1737 8.44759 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
