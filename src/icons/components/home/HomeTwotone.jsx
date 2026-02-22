import Icon from "../../Icon";

export default function HomeTwotone({
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
      <path d="M5 8.5l7 -5.5l7 5.5v12.5h-4v-8l-1 -1h-4l-1 1v8h-4v-12.5Z" fill="currentColor" fill-opacity="0">
		<animate attributeName="fill-opacity" begin="1.5s" dur="0.15s" fill="freeze" to="0.3" />
	</path>
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M4.5 21.5h15" stroke-dasharray="18">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="18;0" />
		</path>
		<path d="M4.5 21.5v-13.5M19.5 21.5v-13.5" stroke-dasharray="16" stroke-dashoffset="16">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" fill="freeze" to="0" />
		</path>
		<path d="M2 10l10 -8l10 8" stroke-dasharray="28" stroke-dashoffset="28">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" fill="freeze" to="0" />
		</path>
		<path d="M9.5 21.5v-9h5v9" stroke-dasharray="26" stroke-dashoffset="26">
			<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.6s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
