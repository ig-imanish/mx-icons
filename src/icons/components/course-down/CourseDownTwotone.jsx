import React from "react";
import Icon from "../../Icon";

export default function CourseDownTwotone({
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
      <path opacity="0.5" d="M22 18L14.6203 10.6653C13.6227 9.67375 13.1238 9.17795 12.5051 9.17802C11.8864 9.17809 11.3876 9.674 10.3902 10.6658L10.1509 10.9038C9.15254 11.8965 8.65338 12.3929 8.03422 12.3926C7.41506 12.3924 6.91626 11.8957 5.91867 10.9023L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.0001 12.4542V18H16.418" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
