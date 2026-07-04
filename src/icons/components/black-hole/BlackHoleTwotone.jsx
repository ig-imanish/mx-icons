import React from "react";
import Icon from "../../Icon";

export default function BlackHoleTwotone({
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
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 10C17 10 16.6 22 9 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M10.6313 10.6961C14.1669 7.16053 22.3693 15.9287 16.9953 21.3027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path opacity="0.5" d="M13.6802 13.3039C10.1447 16.8395 1.94222 8.07135 7.31623 2.69734" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path opacity="0.5" d="M10.8516 13.5242C7.31605 9.98865 16.0842 1.78622 21.4582 7.16023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path opacity="0.5" d="M13.4599 10.4758C16.9955 14.0113 8.22736 22.2138 2.85334 16.8398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 12C14 17 2 16.6 2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
