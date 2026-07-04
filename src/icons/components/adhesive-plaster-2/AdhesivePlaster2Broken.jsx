import React from "react";
import Icon from "../../Icon";

export default function AdhesivePlaster2Broken({
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
      <path d="M12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765M12.765 20.4155L20.4155 12.765M12.765 20.4155L8.17476 15.8252M3.58447 11.235C1.47184 9.12233 1.47184 5.69709 3.58447 3.58447C5.69709 1.47184 9.12233 1.47184 11.235 3.58447M3.58447 11.235L11.235 3.58447M3.58447 11.235L5 12.6505M20.4155 12.765L19 11.3495M11.235 3.58447L15.8252 8.17476" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="9.17154" cy="12" r="1" transform="rotate(-45 9.17154 12)" fill="currentColor"/>
      <circle cx="11.9999" cy="14.8286" r="1" transform="rotate(-45 11.9999 14.8286)" fill="currentColor"/>
      <circle cx="11.9999" cy="9.17139" r="1" transform="rotate(-45 11.9999 9.17139)" fill="currentColor"/>
      <circle cx="14.8285" cy="12" r="1" transform="rotate(-45 14.8285 12)" fill="currentColor"/>
    </Icon>
  );
}
