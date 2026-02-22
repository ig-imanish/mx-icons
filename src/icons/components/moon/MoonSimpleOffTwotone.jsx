import Icon from "../../Icon";

export default function MoonSimpleOffTwotone({
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
		<mask id="SVGybJfqbye">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M12 3c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9c3.53 0 6.59 -2.04 8.06 -5c0 0 -6.06 1.5 -9.06 -3c-3 -4.5 1 -10 1 -10Z" stroke="currentColor" fill="currentColor" fill-opacity="0" stroke-dasharray="62">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
					<animate attributeName="fill-opacity" begin="0.6s" dur="0.15s" fill="freeze" to="0.3" />
				</path>
				<path d="M-1 11h26" stroke="currentColor" fill="none" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGybJfqbye)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
