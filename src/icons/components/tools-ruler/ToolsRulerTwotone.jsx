import React from "react";
import Icon from "../../Icon";

export default function ToolsRulerTwotone({
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
      <path d="M4.04537 18.5083C2.68179 17.1448 2 16.463 2 15.6157C2 14.7685 2.68179 14.0867 4.04537 12.7231L12.7231 4.04537C14.0867 2.68179 14.7685 2 15.6157 2C16.463 2 17.1448 2.68179 18.5083 4.04537L19.9546 5.49167C21.3182 6.85525 22 7.53704 22 8.38426C22 9.23148 21.3182 9.91327 19.9546 11.2769L11.2769 19.9546C9.91327 21.3182 9.23148 22 8.38426 22C7.53704 22 6.85525 21.3182 5.49167 19.9546L4.04537 18.5083Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M8.46436 8.46448L9.87857 9.87869" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12.707 4.2218L14.1212 5.63602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M4.22192 12.7072L5.63614 14.1214" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M6.34326 10.5858L8.46458 12.7071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M10.5857 6.34314L12.707 8.46446" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
