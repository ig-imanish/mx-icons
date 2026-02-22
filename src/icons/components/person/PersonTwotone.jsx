import Icon from "../../Icon";

export default function PersonTwotone({
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
      <g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z" fill-opacity="0" stroke-dasharray="22">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="22;0" />
			<animate attributeName="fill-opacity" begin="1.1s" dur="0.15s" fill="freeze" to="0.3" />
		</path>
		<path d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z" fill-opacity="0" stroke-dasharray="38" stroke-dashoffset="38">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" fill="freeze" to="0" />
			<animate attributeName="fill-opacity" begin="1.1s" dur="0.15s" fill="freeze" to="0.3" />
		</path>
	</g>
    </Icon>
  );
}
