import React from "react";
import Icon from "../../Icon";

export default function CosmeticBulk({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path opacity="0.5" d="M2 11.5C2 11.2239 2.22386 11 2.5 11H7.5C7.77614 11 8 11.2239 8 11.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V11.5Z" fill="currentColor"/>
      <path d="M3 11H7V5.99983C7 5.25644 6.21769 4.77295 5.55279 5.1054L3.55279 6.1054C3.214 6.27479 3 6.62105 3 6.99983V11Z" fill="currentColor"/>
      <path d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z" fill="currentColor"/>
      <path opacity="0.5" d="M15.75 15.9492V19.5001H13.5C13.0858 19.5001 12.75 19.8359 12.75 20.2501C12.75 20.6643 13.0858 21.0001 13.5 21.0001H19.5C19.9142 21.0001 20.25 20.6643 20.25 20.2501C20.25 19.8359 19.9142 19.5001 19.5 19.5001H17.25V15.9492C17.0048 15.9827 16.7544 15.9999 16.5 15.9999C16.2456 15.9999 15.9952 15.9827 15.75 15.9492Z" fill="currentColor"/>
    </Icon>
  );
}
