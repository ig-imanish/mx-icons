import React from "react";
import Icon from "../../Icon";

export default function RestartTwotone({
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
      <g clip-path="url(#clip0_1276_6232)">
      <path opacity="0.5" d="M19.7285 10.9286C20.4412 13.5975 19.7507 16.5633 17.6569 18.6571C14.5327 21.7813 9.46734 21.7813 6.34315 18.6571C3.21895 15.5329 3.21895 10.4676 6.34315 7.34338C9.46734 4.21918 14.5327 4.21918 17.6569 7.34338L18.364 8.05048" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1214 8.05026H18.364V3.80762" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_1276_6232">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </Icon>
  );
}
