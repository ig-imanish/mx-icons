import Icon from "../../Icon";

export default function ForkLeft({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M14 20v-16M14 20v-2c0 -2.76 -2.24 -5 -5 -5h-4" stroke-dasharray="18">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="18;0" />
		</path>
		<path d="M5 13l3 -3M5 13l3 3M14 4l3 3M14 4l-3 3" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
