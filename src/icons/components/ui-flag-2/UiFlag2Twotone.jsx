import React from "react";
import Icon from "../../Icon";

export default function UiFlag2Twotone({
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
      <path d="M5 22V14V4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3329 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.8221 14.2945C18.4082 14.148 18.6861 13.4769 18.3753 12.9589L16.8147 10.3578C16.4732 9.78867 16.3024 9.50409 16.2619 9.19455C16.2451 9.06543 16.2451 8.93466 16.2619 8.80553C16.3024 8.49599 16.4732 8.21141 16.8147 7.64225L18.0932 5.51136C18.4278 4.95364 17.9211 4.26976 17.2901 4.42751C15.8013 4.79971 14.2331 4.69328 12.8082 4.12333L12.3949 3.95801C10.8321 3.33288 9.1212 3.1758 7.47067 3.50591L5 4.00004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
