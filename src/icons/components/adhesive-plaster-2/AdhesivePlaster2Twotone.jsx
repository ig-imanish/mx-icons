import React from "react";
import Icon from "../../Icon";

export default function AdhesivePlaster2Twotone({
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
      <path d="M20.4155 12.765L11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235L12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12.7651 20.4155L20.4155 12.7651M11.235 3.58447L3.58447 11.235" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="9.17154" cy="12" r="1" transform="rotate(-45 9.17154 12)" fill="currentColor"/>
      <circle cx="11.9999" cy="14.8286" r="1" transform="rotate(-45 11.9999 14.8286)" fill="currentColor"/>
      <circle cx="11.9999" cy="9.17139" r="1" transform="rotate(-45 11.9999 9.17139)" fill="currentColor"/>
      <circle cx="14.8285" cy="12" r="1" transform="rotate(-45 14.8285 12)" fill="currentColor"/>
    </Icon>
  );
}
