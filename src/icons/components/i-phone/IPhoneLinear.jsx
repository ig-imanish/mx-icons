import React from "react";
import Icon from "../../Icon";

export default function IPhoneLinear({
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
      <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 19H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16.7484 2.37793L16.6643 2.5041C15.9082 3.63818 15.5302 4.20525 14.978 4.54836C14.8682 4.61658 14.7541 4.67764 14.6365 4.73115C14.0447 5.00025 13.3632 5.00025 12.0002 5.00025C10.6371 5.00025 9.95564 5.00025 9.36387 4.73115C9.2462 4.67764 9.13211 4.61658 9.02232 4.54836C8.47016 4.20524 8.09213 3.6382 7.33606 2.5041L7.25195 2.37793" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
