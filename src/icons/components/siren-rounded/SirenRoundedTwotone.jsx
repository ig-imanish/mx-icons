import React from "react";
import Icon from "../../Icon";

export default function SirenRoundedTwotone({
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
      <path opacity="0.5" d="M20 22V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16V22" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14.2905 11.5C15.2932 11.9059 16.0939 12.7065 16.4998 13.7092" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 6L19.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 6L4.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
