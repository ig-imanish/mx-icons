import React from "react";
import Icon from "../../Icon";

export default function SmartVacuumCleaner2Bulk({
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
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M6.06066 19.0001L2.53033 22.5304C2.23744 22.8233 1.76256 22.8233 1.46967 22.5304C1.17678 22.2375 1.17678 21.7627 1.46967 21.4698L5 17.9395L6.06066 19.0001Z" fill="currentColor"/>
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M17.9393 19.0001L21.4697 22.5304C21.7626 22.8233 22.2374 22.8233 22.5303 22.5304C22.8232 22.2375 22.8232 21.7627 22.5303 21.4698L19 17.9395L17.9393 19.0001Z" fill="currentColor"/>
      <path d="M9.75 8.75C9.75 7.50736 10.7574 6.5 12 6.5C13.2426 6.5 14.25 7.50736 14.25 8.75C14.25 9.99264 13.2426 11 12 11C10.7574 11 9.75 9.99264 9.75 8.75Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.5C17.5228 21.5 22 17.0228 22 11.5C22 5.97715 17.5228 1.5 12 1.5C6.47715 1.5 2 5.97715 2 11.5C2 17.0228 6.47715 21.5 12 21.5ZM8.25 8.75C8.25 6.67893 9.92893 5 12 5C14.0711 5 15.75 6.67893 15.75 8.75C15.75 10.8211 14.0711 12.5 12 12.5C9.92893 12.5 8.25 10.8211 8.25 8.75ZM12.75 15.75C12.75 15.3358 12.4142 15 12 15C11.5858 15 11.25 15.3358 11.25 15.75V17.75C11.25 18.1642 11.5858 18.5 12 18.5C12.4142 18.5 12.75 18.1642 12.75 17.75V15.75Z" fill="currentColor"/>
    </Icon>
  );
}
