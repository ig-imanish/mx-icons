import Icon from "../../Icon";

export default function TurnSlightLeft({
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
		<path d="M14 19v-7l-7 -7" stroke-dasharray="20">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="20;0" />
		</path>
		<path d="M7 5h4M7 5v4" stroke-dasharray="6" stroke-dashoffset="6">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
