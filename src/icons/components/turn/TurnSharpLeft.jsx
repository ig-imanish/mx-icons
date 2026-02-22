import Icon from "../../Icon";

export default function TurnSharpLeft({
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
		<path d="M17 20v-5c0 -0.55 -0.45 -1 -1 -1h-8c-0.55 0 -1 -0.45 -1 -1v-9" stroke-dasharray="28">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="28;0" />
		</path>
		<path d="M7 4l-3 3M7 4l3 3" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
