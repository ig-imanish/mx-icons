import React from "react";
import Icon from "../../Icon";

export default function UiBroomTwotone({
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
      <path d="M12.728 5.53587C14.2901 3.97377 16.8227 3.9737 18.3848 5.53579C19.9469 7.09789 19.9469 9.63063 18.3848 11.1927M3.57952 12.9794L2.91264 11.8832C2.04059 10.1748 2.60083 7.96535 4.40773 7.01132C5.26153 6.56051 6.21846 6.13209 7.16933 5.86026C10.0288 5.0428 12.5347 5.34253 12.5347 5.34253L18.5779 11.3857C18.5779 11.3857 18.8777 13.8916 18.0602 16.7511C17.7884 17.702 17.3599 18.6589 16.9091 19.5127C15.9551 21.3196 13.7457 21.8799 12.0373 21.0078L10.9409 20.3409C7.93352 18.5113 5.40903 15.9868 3.57952 12.9794Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M20.5061 3.41406L18.3848 5.53538" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
