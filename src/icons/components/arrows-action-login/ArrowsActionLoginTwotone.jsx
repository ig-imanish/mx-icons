import React from "react";
import Icon from "../../Icon";

export default function ArrowsActionLoginTwotone({
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
      <path opacity="0.5" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 12H14M14 12L11 9M14 12L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
