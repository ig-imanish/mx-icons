import Icon from "../../Icon";

export default function Menu({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="16">
		<path d="M5 5h14">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="16;0" />
		</path>
		<path d="M5 12h14" stroke-dashoffset="16">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" fill="freeze" to="0" />
		</path>
		<path d="M5 19h14" stroke-dashoffset="16">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
