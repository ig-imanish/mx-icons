import Icon from "../../Icon";

export default function Account({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="28">
		<path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="28;0" />
		</path>
		<path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z" stroke-dashoffset="28">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
