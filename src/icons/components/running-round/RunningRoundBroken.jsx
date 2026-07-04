import React from "react";
import Icon from "../../Icon";

export default function RunningRoundBroken({
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
      <circle cx="18.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14.4 21.9998V21.1948C14.4 21.117 14.4 21.0781 14.3996 21.0411C14.377 18.9018 13.3773 16.8903 11.6857 15.5804C11.6565 15.5578 11.6255 15.5343 11.5635 15.4873C11.5235 15.457 11.5035 15.4419 11.4877 15.4294C10.5309 14.6738 10.467 13.2453 11.3524 12.4073C11.367 12.3935 11.3857 12.3765 11.4227 12.3428L12.4628 11.3973C14.0898 9.91821 13.5945 7.24444 11.5457 6.4462C10.8122 6.16044 9.99522 6.17841 9.27504 6.49613L8.75335 6.72629M5.43897 8.61147L4 9.63619" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 17L8.74064 17.3112C7.32089 19.0149 5.21773 20 3 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 12C17.3131 12.3283 18.6869 12.3283 20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
