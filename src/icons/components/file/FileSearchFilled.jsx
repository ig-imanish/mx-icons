import Icon from "../../Icon";

export default function FileSearchFilled({
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
		<mask id="SVGYjxiDeRZ">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z" stroke="currentColor" fill="currentColor" stroke-dasharray="62" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
					<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<path d="M14.83 15.83c-1.56 1.56 -4.1 1.56 -5.66 0c-1.56 -1.56 -1.56 -4.1 0 -5.66c1.56 -1.56 4.1 -1.56 5.66 0c1.56 1.56 1.56 4.1 0 5.66l4.67 4.67" stroke="currentColor" fill="none" stroke-dasharray="34" stroke-dashoffset="34">
					<animate attributeName="stroke-dashoffset" begin="1.1s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGYjxiDeRZ)" />
    </Icon>
  );
}
