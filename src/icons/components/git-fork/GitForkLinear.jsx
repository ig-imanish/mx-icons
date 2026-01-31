import React from "react";
import Icon from "../../Icon";

export default function GitForkLinear({
    size = 24,
    color = "currentColor",
    className = "",
    ...props
}) {
    return (
        <Icon
            size={size}
            color={color}
            fill="none"
            viewBox="0 0 24 24"
            className={className}
            {...props}
        >
            <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />

            <path
                d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <line
                x1="12"
                y1="12"
                x2="12"
                y2="16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </Icon>
    );
}
