import React from "react";
import Icon from "../../Icon";

export default function ItHashtagBulk({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2009 2.27731C10.6 2.38817 10.8337 2.80158 10.7228 3.20068L5.72283 21.2007C5.61197 21.5998 5.19856 21.8334 4.79946 21.7226C4.40036 21.6117 4.16669 21.1983 4.27755 20.7992L9.27755 2.79921C9.38841 2.40011 9.80182 2.16645 10.2009 2.27731Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.2009 2.27731C19.6 2.38817 19.8337 2.80158 19.7228 3.20068L14.7228 21.2007C14.612 21.5998 14.1986 21.8334 13.7995 21.7226C13.4004 21.6117 13.1667 21.1983 13.2776 20.7992L18.2776 2.79921C18.3884 2.40011 18.8018 2.16645 19.2009 2.27731Z" fill="currentColor"/>
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M3.25 9C3.25 8.58579 3.58579 8.25 4 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9C22.75 9.41421 22.4142 9.75 22 9.75H4C3.58579 9.75 3.25 9.41421 3.25 9Z" fill="currentColor"/>
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H20C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16Z" fill="currentColor"/>
    </Icon>
  );
}
