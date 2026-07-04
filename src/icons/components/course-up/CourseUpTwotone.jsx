import React from "react";
import Icon from "../../Icon";

export default function CourseUpTwotone({
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
      <path opacity="0.5" d="M22 7L14.6203 14.3347C13.6227 15.3263 13.1238 15.822 12.5051 15.822C11.8864 15.8219 11.3876 15.326 10.3902 14.3342L10.1509 14.0962C9.15254 13.1035 8.65338 12.6071 8.03422 12.6074C7.41506 12.6076 6.91626 13.1043 5.91867 14.0977L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.0001 12.5458V7H16.418" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
