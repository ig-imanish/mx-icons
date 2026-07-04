import React from "react";
import Icon from "../../Icon";

export default function VideoFrameCutBroken({
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
      <path d="M17 3.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
      <path d="M7 3.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8.5L7 8.5M21 8.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 15.5L5.75 15.5L7 15.5M21 15.5L17 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14.5 3.00293C17.2939 3.02331 18.8237 3.16641 19.8284 4.17112C20.8916 5.23426 20.99 6.8854 20.9991 10M14.5 20.9962C17.2939 20.9758 18.8237 20.8327 19.8284 19.828C20.8916 18.7648 20.99 17.1137 20.9991 13.9991M9.49991 20.9962C6.70609 20.9758 5.17627 20.8327 4.17157 19.828C3 18.6564 3 16.7708 3 12.9995V10.9995C3 7.22831 3 5.34269 4.17157 4.17112C5.17627 3.16642 6.70609 3.02331 9.49991 3.00293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
