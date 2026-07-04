import React from "react";
import Icon from "../../Icon";

export default function MaskSadBroken({
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
      <path d="M21 11V12C21 17.4903 16.761 20.1547 14.1014 21.286C13.38 21.5929 13.0193 21.7464 12 21.7464C10.9807 21.7464 10.62 21.5929 9.89856 21.286C7.23896 20.1547 3 17.4903 3 12V6.71888C3 4.52896 3 3.434 3.70725 2.83487C4.4145 2.23574 5.49553 2.41591 7.6576 2.77626L8.71202 2.95199C10.3523 3.22537 11.1724 3.36205 12 3.36205C12.8276 3.36205 13.6477 3.22537 15.288 2.95199L16.3424 2.77626C18.5045 2.41591 19.5855 2.23574 20.2927 2.83487C21 3.434 21 4.52896 21 6.71888V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.5 9C6.79112 8.4174 7.57665 8 8.5 8C9.42335 8 10.2089 8.4174 10.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.5 9C13.7911 8.4174 14.5766 8 15.5 8C16.4234 8 17.2089 8.4174 17.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.5 15C8.5 15 9.55 14 12 14C14.45 14 15.5 15 15.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
