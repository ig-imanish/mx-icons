import React from "react";
import Icon from "../../Icon";

export default function SkateboardingRoundTwotone({
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
      <path d="M3 17L3.60827 17.6759C4.36684 18.5187 5.4475 19 6.58145 19H17.4186C18.5525 19 19.6332 18.5187 20.3917 17.6759L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle opacity="0.5" cx="7" cy="21" r="1" fill="currentColor"/>
      <circle opacity="0.5" cx="17" cy="21" r="1" fill="currentColor"/>
      <circle cx="19" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 16.5002V14.3667C15 13.8177 14.7561 13.297 14.3344 12.9455L13.3379 12.1152C12.6195 11.5164 12.5702 10.43 13.2315 9.76871L14.8855 8.11473C15.4193 7.5809 15.2452 6.67671 14.5513 6.37932C13.2663 5.82861 11.793 5.94205 10.6075 6.68301L8.5 8.00021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M11 14L10.3787 14.6213C9.94513 15.0549 9.72836 15.2716 9.4527 15.3858C9.17705 15.5 8.87049 15.5 8.25736 15.5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M16.5 10H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
