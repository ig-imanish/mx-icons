import Icon from "../../Icon";

export default function PizzaTwotone({
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
      <g fill="currentColor">
		<path d="M4 6.45c2.01 -2.12 4.85 -3.45 8 -3.45c3.15 0 5.99 1.33 8 3.45l-8 13.55Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke-dasharray="52">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="52;0" />
			<animate attributeName="fill-opacity" begin="0.6s" dur="0.15s" fill="freeze" to="0.3" />
		</path>
		<circle cx="9" cy="7">
			<animate attributeName="r" begin="0.85s" dur="0.2s" fill="freeze" to="2" />
		</circle>
		<circle cx="12" cy="13">
			<animate attributeName="r" begin="1.05s" dur="0.2s" fill="freeze" to="2" />
		</circle>
	</g>
    </Icon>
  );
}
