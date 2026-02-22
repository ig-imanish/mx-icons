import Icon from "../../Icon";

export default function SwitchToSwitchOffTransition({
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
      <path d="M12 7h5c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5h-10c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	<circle cx="7" cy="12" r="3" fill="currentColor">
		<animate attributeName="cx" dur="0.2s" fill="freeze" values="17;7" />
	</circle>
    </Icon>
  );
}
