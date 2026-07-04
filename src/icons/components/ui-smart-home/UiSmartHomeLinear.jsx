import React from "react";
import Icon from "../../Icon";

export default function UiSmartHomeLinear({
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
      <path d="M13.9999 22C17.7711 22 19.6567 22 20.8283 20.7881C21.9999 19.5763 21.9999 17.6258 21.9999 13.725V12.2039C21.9999 9.91549 21.9999 8.77128 21.4807 7.82274C20.9615 6.87421 20.0129 6.28551 18.1158 5.10812L16.1158 3.86687C14.1105 2.62229 13.1078 2 11.9999 2C10.8919 2 9.88925 2.62229 7.8839 3.86687L5.8839 5.10813C3.98681 6.28551 3.03827 6.87421 2.51907 7.82274C2.20149 8.40293 2.07817 9.05632 2.03027 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
