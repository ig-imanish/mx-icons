import Icon from "../../Icon";

export default function HomeMdAltTwotone({
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
      <path d="M10 14h4v6h-4Z" fill="currentColor" fill-opacity="0">
		<animate attributeName="fill-opacity" begin="1.4s" dur="0.15s" fill="freeze" to="0.3" />
	</path>
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<g stroke-dasharray="16">
			<path d="M5 21h14">
				<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="16;0" />
			</path>
			<path d="M5 21v-13M19 21v-13" stroke-dashoffset="16">
				<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" fill="freeze" to="0" />
			</path>
		</g>
		<path d="M9 21v-8h6v8" stroke-dasharray="24" stroke-dashoffset="24">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.5s" fill="freeze" to="0" />
		</path>
		<path d="M2 10l10 -8l10 8" stroke-dasharray="28" stroke-dashoffset="28">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.6s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
