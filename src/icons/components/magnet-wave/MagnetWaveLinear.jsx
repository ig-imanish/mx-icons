import React from "react";
import Icon from "../../Icon";

export default function MagnetWaveLinear({
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
      <path d="M14.4444 3H16.5C17.3284 3 18 3.67157 18 4.5V6C18 6.82843 17.3284 7.5 16.5 7.5H14.4444M14.4444 3H11C6.02943 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21H14.4444M14.4444 3V7.5M14.4444 7.5H10.9444C8.45916 7.5 6.44444 9.51472 6.44444 12C6.44444 14.4853 8.45916 16.5 10.9444 16.5H14.4444M14.4444 16.5H16.5C17.3284 16.5 18 17.1716 18 18V19.5C18 20.3284 17.3284 21 16.5 21H14.4444M14.4444 16.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5 6C21.5 6 23 7.8 23 12C23 16.2 21.5 18 21.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.5 9C19.5 9 20 9.9 20 12C20 14.1 19.5 15 19.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
