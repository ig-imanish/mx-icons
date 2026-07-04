import React from "react";
import Icon from "../../Icon";

export default function WomenBulk({
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
      <circle opacity="0.5" cx="12" cy="9" r="7" fill="currentColor"/>
      <path d="M11.25 15.96V17.7497H9.5C9.08579 17.7497 8.75 18.0855 8.75 18.4997C8.75 18.9139 9.08579 19.2497 9.5 19.2497H11.25V21.9997C11.25 22.4139 11.5858 22.7497 12 22.7497C12.4142 22.7497 12.75 22.4139 12.75 21.9997V19.2497H14.5C14.9142 19.2497 15.25 18.9139 15.25 18.4997C15.25 18.0855 14.9142 17.7497 14.5 17.7497L12.75 17.7497V15.96C12.5036 15.9862 12.2534 15.9997 12 15.9997C11.7466 15.9997 11.4964 15.9862 11.25 15.96Z" fill="currentColor"/>
    </Icon>
  );
}
