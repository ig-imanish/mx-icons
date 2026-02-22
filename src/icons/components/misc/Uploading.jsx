import Icon from "../../Icon";

export default function Uploading({
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
		<path d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9" stroke-dasharray="32">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="32;0" />
		</path>
		<path d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9" stroke-dasharray="2 4" opacity="0">
			<set attributeName="opacity" to="1" begin="0.45s" fill="freeze" />
			<animateTransform attributeName="transform" type="rotate" begin="0.45s" dur="0.6s" fill="freeze" values="-180 12 12;0 12 12" />
		</path>
		<path d="M12 16v-7.5" stroke-dasharray="10" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
