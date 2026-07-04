import React from "react";
import Icon from "../../Icon";

export default function Ufo3Linear({
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
      <path d="M18.922 12.1496C20.5253 14.7734 20.9935 17.1491 19.9012 18.2415C18.2713 19.8714 13.7841 18.0269 9.8789 14.1216C5.97365 10.2164 4.12913 5.72927 5.75904 4.09936C6.8514 3.007 9.22714 3.47523 11.851 5.0785" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11.4845 5.44459C13.3312 3.5979 16.3253 3.5979 18.172 5.44459L18.5556 5.82818C20.4023 7.67488 20.4023 10.669 18.5556 12.5157C18.4302 12.641 18.2695 12.7251 18.095 12.6938C17.5985 12.6046 16.3767 12.1346 14.1211 9.87903C11.8656 7.62347 11.3955 6.40162 11.3064 5.90516C11.2751 5.7307 11.3592 5.56993 11.4845 5.44459Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12.0002" r="1" transform="rotate(45 12 12.0002)" fill="currentColor"/>
      <circle cx="9.17139" cy="7.75699" r="1" transform="rotate(45 9.17139 7.75699)" fill="currentColor"/>
      <circle cx="16.2427" cy="14.8283" r="1" transform="rotate(45 16.2427 14.8283)" fill="currentColor"/>
      <path d="M3.636 20.3635L7.75732 16.2422" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 21.9995L12.7073 19.7781" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 14L4.22168 11.293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
