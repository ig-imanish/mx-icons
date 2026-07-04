import React from "react";
import Icon from "../../Icon";

export default function SleepingBroken({
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
      <path d="M2 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 16V18M12 16V11.3571C12 10.5592 12 10.1602 12.1122 9.83944C12.3133 9.26495 12.7649 8.81326 13.3394 8.61223C13.6602 8.5 14.0592 8.5 14.8571 8.5C16.8521 8.5 17.8495 8.5 18.6514 8.78058C20.0876 9.28314 21.2169 10.4124 21.7194 11.8486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 16H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 11C9.5 9.61929 8.38071 8.5 7 8.5C5.61929 8.5 4.5 9.61929 4.5 11C4.5 12.3807 5.61929 13.5 7 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
