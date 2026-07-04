import React from "react";
import Icon from "../../Icon";

export default function EndCallRoundedBulk({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.9469 16.5173L5.6072 16.8972C3.78158 17.415 2 15.9102 2 13.8504C2 12.6127 2.27659 11.373 3.08289 10.5032C4.1279 9.37579 6.00015 7.90786 9 7.29199V13.6185C9 14.9826 8.15591 16.1743 6.9469 16.5173ZM15 13.6185C15 14.9826 15.8441 16.1743 17.0531 16.5173L18.3928 16.8972C20.2184 17.415 22 15.9102 22 13.8504C22 12.6127 21.7234 11.373 20.9171 10.5032C19.8721 9.3758 17.9998 7.90786 15 7.29199V13.6185Z" fill="currentColor"/>
      <path opacity="0.5" d="M9 13.6185C9 13.6185 9 11.9639 12 11.9639C15 11.9639 15 13.6185 15 13.6185V7.29203C14.1034 7.10796 13.1061 7 12 7C10.8939 7 9.8966 7.10796 9 7.29203V13.6185Z" fill="currentColor"/>
    </Icon>
  );
}
