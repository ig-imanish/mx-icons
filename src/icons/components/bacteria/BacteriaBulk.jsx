import React from "react";
import Icon from "../../Icon";

export default function BacteriaBulk({
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
      <path d="M6 15C6 13.3431 7.34315 12 9 12C10.6569 12 12 13.3431 12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15Z" fill="currentColor"/>
      <path d="M14.4648 7.17122C14.4648 7.17122 15.7077 6.99983 16.5862 7.87832C17.4647 8.75682 17.2933 9.99964 17.2933 9.99964" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.00013 9.29278C9.00013 9.29278 7.7573 9.46417 6.87881 8.58568C6.00032 7.70718 6.1717 6.46436 6.1717 6.46436" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.0001 13.1362C19.0001 13.1362 17.8381 13.6092 17.5165 14.8093C17.195 16.0093 17.9648 16.9999 17.9648 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.4209 17.772L14.9995 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM5.60721 10.7869C5.76567 10.4042 5.58389 9.96547 5.20118 9.80701C4.81848 9.64854 4.37978 9.83033 4.22131 10.213L3.80725 11.213C3.64879 11.5957 3.83057 12.0344 4.21327 12.1929C4.59598 12.3514 5.03468 12.1696 5.19314 11.7869L5.60721 10.7869ZM14.5 11.25C14.9142 11.25 15.25 11.5858 15.25 12V14C15.25 14.4142 14.9142 14.75 14.5 14.75C14.0858 14.75 13.75 14.4142 13.75 14V12C13.75 11.5858 14.0858 11.25 14.5 11.25ZM12 4.25H10C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75H12C12.4142 5.75 12.75 5.41421 12.75 5C12.75 4.58579 12.4142 4.25 12 4.25Z" fill="currentColor"/>
      <path d="M12.5 9.5L11.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
