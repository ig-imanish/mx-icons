import React from "react";
import Icon from "../../Icon";

export default function IPhoneBroken({
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
      <path d="M20 14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 19H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16.7481 2.37793L16.664 2.5041C15.908 3.63818 15.5299 4.20525 14.9778 4.54836C14.868 4.61658 14.7539 4.67764 14.6362 4.73115C14.0444 5.00025 13.3629 5.00025 11.9999 5.00025C10.6369 5.00025 9.95539 5.00025 9.36363 4.73115C9.24596 4.67764 9.13187 4.61658 9.02207 4.54836C8.46992 4.20524 8.09189 3.6382 7.33582 2.5041L7.25171 2.37793" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
