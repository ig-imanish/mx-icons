import React from "react";
import Icon from "../../Icon";

export default function TextFormattingTextItalicOutline({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.9826 1.24995H9C8.58579 1.24995 8.25 1.58574 8.25 1.99995C8.25 2.41417 8.58579 2.74995 9 2.74995H13.992L8.44198 21.25H3C2.58579 21.25 2.25 21.5857 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H8.98314C8.9946 22.7502 9.00604 22.7502 9.01744 22.75H15C15.4142 22.75 15.75 22.4142 15.75 22C15.75 21.5857 15.4142 21.25 15 21.25H10.008L15.558 2.74995H21C21.4142 2.74995 21.75 2.41417 21.75 1.99995C21.75 1.58574 21.4142 1.24995 21 1.24995H15.0169C15.0054 1.24969 14.994 1.24969 14.9826 1.24995Z" fill="currentColor"/>
    </Icon>
  );
}
