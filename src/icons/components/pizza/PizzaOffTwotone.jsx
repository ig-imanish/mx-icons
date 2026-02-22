import Icon from "../../Icon";

export default function PizzaOffTwotone({
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
      <defs>
		<mask id="SVGIa6i1d6W">
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
			<path d="M-1 11h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
				<animate attributeName="stroke-dashoffset" begin="1.25s" dur="0.4s" fill="freeze" to="0" />
			</path>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGIa6i1d6W)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.25s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
