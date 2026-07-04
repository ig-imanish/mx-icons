import React from "react";
import Icon from "../../Icon";

export default function TrashBinMinimalisticTwotone({
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
      <path opacity="0.5" d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20.5001 6H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M9.5 11L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M14.5 11L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
