import React from "react";
import Icon from "../../Icon";

export default function TreadmillRoundTwotone({
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
      <circle cx="15" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 16.0001V15.0263C11 14.9078 11 14.8486 10.9979 14.792C10.9672 13.9811 10.6095 13.2173 10.0062 12.6747C9.96408 12.6368 9.91852 12.5989 9.8275 12.523C9.69411 12.4118 9.62741 12.3563 9.5758 12.3066C8.80944 11.5689 8.75462 10.3604 9.45104 9.5563C9.49795 9.50214 9.55934 9.44075 9.68211 9.31798L10.0113 8.98874C10.9639 8.03622 10.6532 6.42287 9.41502 5.89224C8.84181 5.64658 8.18464 5.69719 7.65581 6.02771L4.5 8.00009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M3 15.5H3.37868C4.73694 15.5 6.03957 14.9604 7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12.5 10C13.4737 10.3246 14.5263 10.3246 15.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.4888 21.9996H3.08684C2.48659 21.9996 2 21.513 2 20.9128C2 20.3848 2.37943 19.9332 2.89949 19.8422L19.0559 17.0148C20.5926 16.7459 22 17.9284 22 19.4884C22 20.8753 20.8757 21.9996 19.4888 21.9996Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path opacity="0.5" d="M19.1218 10.0213L18.3801 9.91005L19.1218 10.0213ZM22.1471 7.73544C22.5533 7.6542 22.8167 7.25908 22.7354 6.85291C22.6542 6.44674 22.2591 6.18333 21.8529 6.26456L22.1471 7.73544ZM18.7417 17.6113L19.8635 10.1326L18.3801 9.91005L17.2583 17.3887L18.7417 17.6113ZM19.8635 10.1326C20.0436 8.93217 20.9568 7.97349 22.1471 7.73544L21.8529 6.26456C20.0428 6.62658 18.6539 8.08452 18.3801 9.91005L19.8635 10.1326Z" fill="currentColor"/>
    </Icon>
  );
}
