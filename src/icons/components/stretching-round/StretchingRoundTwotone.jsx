import React from "react";
import Icon from "../../Icon";

export default function StretchingRoundTwotone({
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
      <circle cx="14.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M7.94806 13.4348L7.92328 13.4109C6.88143 12.404 7.6864 10.7852 8.5932 10.1427C9.5 9.50016 13.3451 8.50016 13.3451 13.4345C13.3451 18.129 9.69442 22.0003 5 22.0003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 21.9962V18.0492C19 16.2733 17.395 14.9201 15.6265 15.205" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
