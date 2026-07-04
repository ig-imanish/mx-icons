import React from "react";
import Icon from "../../Icon";

export default function FlipVerticalLinear({
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
      <path d="M5.88616 2L18.1134 2C19.8156 2 20.6666 2 20.9458 2.54242C21.2249 3.08484 20.7302 3.77738 19.7409 5.16247L18.6114 6.74372C18.1715 7.35957 17.9516 7.6675 17.6285 7.83375C17.3055 8 16.927 8 16.1702 8L7.82935 8C7.07252 8 6.6941 8 6.37105 7.83375C6.048 7.6675 5.82805 7.35957 5.38815 6.74372L4.2587 5.16248C3.26934 3.77738 2.77467 3.08484 3.05381 2.54242C3.33294 2 4.18402 2 5.88616 2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5.88616 22L18.1134 22C19.8156 22 20.6666 22 20.9458 21.4576C21.2249 20.9152 20.7302 20.2226 19.7409 18.8375L18.6114 17.2563C18.1715 16.6404 17.9516 16.3325 17.6285 16.1662C17.3055 16 16.927 16 16.1702 16L7.82935 16C7.07252 16 6.69411 16 6.37105 16.1662C6.048 16.3325 5.82805 16.6404 5.38815 17.2563L4.2587 18.8375C3.26934 20.2226 2.77467 20.9152 3.05381 21.4576C3.33294 22 4.18402 22 5.88616 22Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 12L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 12L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
