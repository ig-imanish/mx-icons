import React from "react";
import Icon from "../../Icon";

export default function NotesDocumentTextBroken({
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
      <path d="M8 12H9M16 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 8H15M12 8H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
