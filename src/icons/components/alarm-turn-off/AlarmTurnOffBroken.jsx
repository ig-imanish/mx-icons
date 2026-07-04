import React from "react";
import Icon from "../../Icon";

export default function AlarmTurnOffBroken({
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
      <path d="M14.1213 15.1216L12 13.0002M12 13.0002L9.87866 10.8789M12 13.0002L14.1213 10.8789M12 13.0002L9.87868 15.1215" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3.5 4.5L7.50002 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 4.5L16.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 5.20404C8.82378 4.43827 10.3607 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.3607 3.43827 9.82378 4.20404 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
