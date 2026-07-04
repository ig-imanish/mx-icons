import React from "react";
import Icon from "../../Icon";

export default function DropperMinimalisticBroken({
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
      <path d="M5 8C5 6.11438 5 5.17157 5.58579 4.58579C6.17157 4 7.11438 4 9 4H15C16.8856 4 17.8284 4 18.4142 4.58579C19 5.17157 19 6.11438 19 8V15.8831C19 16.6438 18.6809 17.3697 18.1203 17.8841C14.6584 21.0607 9.3416 21.0607 5.87966 17.8841C5.31911 17.3697 5 16.6438 5 15.8831V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 8L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 11.9166C14 13.0672 13.1046 13.9999 12 13.9999C10.8954 13.9999 10 13.0672 10 11.9166C10 11.1967 10.783 10.2358 11.3691 9.61737C11.7161 9.25124 12.2839 9.25124 12.6309 9.61737C13.217 10.2358 14 11.1967 14 11.9166Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 21V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
