import Icon from "../../Icon";

export default function MinusCircleTwotone({
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
		<path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" fill="currentColor" fill-opacity="0" stroke-dasharray="60">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
			<animate attributeName="fill-opacity" begin="0.6s" dur="0.15s" fill="freeze" to="0.3" />
		</path>
		<path d="M7 12h10" fill="none" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
