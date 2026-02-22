import Icon from "../../Icon";

export default function MoonSimpleFilled({
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
      <path d="M12 3c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9c3.53 0 6.59 -2.04 8.06 -5c0 0 -6.06 1.5 -9.06 -3c-3 -4.5 1 -10 1 -10Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="62" fill-opacity="0">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
		<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
	</path>
    </Icon>
  );
}
