import React from "react";
import Icon from "../../Icon";

export default function ToolsCropBroken({
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
      <path d="M8.5 11.5C8.5 10.0858 8.5 9.37868 8.93934 8.93934C9.37868 8.5 10.0858 8.5 11.5 8.5H12.5C13.9142 8.5 14.6213 8.5 15.0607 8.93934C15.5 9.37868 15.5 10.0858 15.5 11.5V12.5C15.5 13.9142 15.5 14.6213 15.0607 15.0607C14.6213 15.5 13.9142 15.5 12.5 15.5H11.5C10.0858 15.5 9.37868 15.5 8.93934 15.0607C8.5 14.6213 8.5 13.9142 8.5 12.5V11.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5.51839 17.1752 5.22937 16.3001 5.10149 15M5 11V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C18.4816 6.82475 18.7706 7.69989 18.8985 9M2 5H5M19 19V22M19 13V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
