import Icon from "../../Icon";

export default function SwitchOffTwotone({
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
		<path d="M12 7h5c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5h-10c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke-dasharray="54">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="54;0" />
			<animate attributeName="fill-opacity" begin="0.6s" dur="0.15s" fill="freeze" to="0.3" />
		</path>
		<circle cx="7" cy="12" r="3" opacity="0">
			<animate attributeName="opacity" begin="0.6s" dur="0.2s" fill="freeze" to="1" />
		</circle>
	</g>
    </Icon>
  );
}
