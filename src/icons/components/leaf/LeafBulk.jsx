import React from "react";
import Icon from "../../Icon";

export default function LeafBulk({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.58172 22 4 18.3541 4 13.8567C4 9.39453 6.55332 4.18759 10.5371 2.32555C11.0014 2.10852 11.5007 2 12 2V22Z" fill="currentColor"/>
      <path opacity="0.3" d="M13.4629 2.32555C12.9986 2.10852 12.4993 2 12 2V9.00006L16.4317 4.56841C15.5689 3.62059 14.5713 2.84361 13.4629 2.32555Z" fill="currentColor"/>
      <path opacity="0.4" d="M12 9.00007V14.5001L18.6142 7.88578C18.0421 6.6656 17.3062 5.52923 16.4317 4.56842L12 9.00007Z" fill="currentColor"/>
      <path opacity="0.6" d="M12 19.5L19.811 11.689C19.5911 10.3986 19.1838 9.10061 18.6142 7.88574L12 14.5V19.5Z" fill="currentColor"/>
      <path opacity="0.7" d="M19.811 11.689L12 19.5V22C16.4183 22 20 18.3541 20 13.8567C20 13.1475 19.9355 12.4194 19.811 11.689Z" fill="currentColor"/>
    </Icon>
  );
}
