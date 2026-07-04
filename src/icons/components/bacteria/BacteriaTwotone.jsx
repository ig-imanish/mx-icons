import React from "react";
import Icon from "../../Icon";

export default function BacteriaTwotone({
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
      <path opacity="0.5" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 15C6 13.3431 7.34315 12 9 12C10.6569 12 12 13.3431 12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M4.5 11.5L4.91406 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14.4648 7.17122C14.4648 7.17122 15.7077 6.99983 16.5862 7.87832C17.4647 8.75682 17.2933 9.99964 17.2933 9.99964" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.99989 9.29278C8.99989 9.29278 7.75706 9.46417 6.87857 8.58568C6.00007 7.70718 6.17146 6.46436 6.17146 6.46436" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.0001 13.1362C19.0001 13.1362 17.8381 13.6092 17.5165 14.8093C17.195 16.0093 17.9648 16.9999 17.9648 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.4209 17.772L14.9995 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M14.5 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 5L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12.5 9.5L11.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
