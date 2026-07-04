import React from "react";
import Icon from "../../Icon";

export default function TextSelectionTwotone({
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
      <path d="M9 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 15L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M6 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M18 4H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M20 18L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M4 6L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
