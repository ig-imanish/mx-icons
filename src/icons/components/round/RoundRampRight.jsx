import Icon from "../../Icon";

export default function RoundRampRight({
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
		<path d="M6.5 17.53c3.29 -1.9 5.5 -5.46 5.5 -9.53v-4M12 20v-16" stroke-dasharray="18">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="18;0" />
		</path>
		<path d="M12 4l3 3M12 4l-3 3" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
