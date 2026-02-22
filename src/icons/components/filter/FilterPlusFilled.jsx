import Icon from "../../Icon";

export default function FilterPlusFilled({
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M3 4h14l-5 6.5v9.5l-4 -4v-5.5Z" fill="currentColor" stroke-dasharray="54" fill-opacity="0">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="54;0" />
			<animate attributeName="fill-opacity" begin="1.1s" dur="0.4s" fill="freeze" to="1" />
		</path>
		<g fill="none" stroke-dasharray="8">
			<path d="M16 18h6" stroke-dashoffset="8">
				<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M19 15v6" stroke-dashoffset="8">
				<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
