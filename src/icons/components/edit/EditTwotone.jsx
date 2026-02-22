import Icon from "../../Icon";

export default function EditTwotone({
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
      <path d="M14 6l4 4l3 -3l-4 -4Z" fill="currentColor" fill-opacity="0">
		<animate attributeName="fill-opacity" begin="1s" dur="0.15s" fill="freeze" to="0.3" />
	</path>
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M7 17v-4l10 -10l4 4l-10 10h-4" stroke-dasharray="44" stroke-dashoffset="44">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.5s" fill="freeze" to="0" />
		</path>
		<path d="M3 21h18" stroke-dasharray="20">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="20;0" />
		</path>
		<path d="M14 6l4 4" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
