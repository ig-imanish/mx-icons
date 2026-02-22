import Icon from "../../Icon";

export default function Peertube({
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
		<mask id="SVGOkL15c1l">
			<path d="M4 1.34l16 10.66l-16 10.67Z" fill="currentColor">
				<animate attributeName="d" dur="0.4s" fill="freeze" values="M12 12l0 0l0 0Z;M4 1.34l16 10.66l-16 10.67Z" />
			</path>
			<path d="M12 6.67v10.67l-8 -5.34Z" fill="currentColor" />
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGOkL15c1l)" />
    </Icon>
  );
}
