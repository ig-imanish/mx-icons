import Icon from "../../Icon";

export default function SwitchOffTwotoneToSwitchTwotoneTransition({
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
      <g fill="currentColor">
		<path d="M12 7h5c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5h-10c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0.3" />
		<circle cx="17" cy="12" r="3">
			<animate attributeName="cx" dur="0.2s" fill="freeze" values="7;17" />
		</circle>
	</g>
    </Icon>
  );
}
