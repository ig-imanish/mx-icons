import Icon from "../../Icon";

export default function BeerAltTwotoneLoop({
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
		<mask id="SVGRLumDbmN">
			<path d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<animateTransform attributeName="transform" type="translate" dur="3s" repeatCount="indefinite" values="0;10" />
				<animate attributeName="d" begin="0.6s" dur="0.3s" fill="freeze" to="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2" />
			</path>
			<path d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z" fill="currentColor" fill-opacity="0.3">
				<animateTransform attributeName="transform" type="translate" dur="3s" repeatCount="indefinite" values="0;10" />
				<animate attributeName="d" begin="0.6s" dur="0.3s" fill="freeze" to="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z" />
			</path>
			<path d="M18 3l-2 18h-9l-2 -18h-5v21h24v-20Z" fill="currentColor" />
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGRLumDbmN)" />
	<path d="M18 3l-2 18h-9l-2 -18Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="62">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
	</path>
    </Icon>
  );
}
