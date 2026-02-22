import Icon from "../../Icon";

export default function Beer({
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
		<mask id="SVGPFSSIcFY">
			<path d="M5 7.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="18" stroke-dashoffset="18">
				<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" fill="freeze" to="0" />
			</path>
			<path d="M18 3l-2 18h-9l-2 -18h-5v21h24v-20Z" fill="currentColor" />
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGPFSSIcFY)" />
	<path d="M18 3l-2 18h-9l-2 -18Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="62">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
	</path>
    </Icon>
  );
}
