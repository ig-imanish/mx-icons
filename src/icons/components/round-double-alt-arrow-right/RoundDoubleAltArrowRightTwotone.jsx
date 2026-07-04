import React from "react";
import Icon from "../../Icon";

export default function RoundDoubleAltArrowRightTwotone({
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
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 9L11.5 12L8.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 9L15.5 12L12.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
