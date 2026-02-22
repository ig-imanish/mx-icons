import Icon from "../../Icon";

export default function Iconify2StaticTwotone({
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
		<mask id="SVGqPZgvZrE">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round">
				<g stroke="currentColor">
					<path d="M3.25 22.25h17.5" opacity="0.33" stroke-width="1.5" />
					<g stroke-width="2">
						<path d="M7 6v-3" opacity="0.33" />
						<path d="M5 8v11h14v-11" opacity="0.6" />
					</g>
				</g>
				<path d="M12 16v4.5M12 3l8.5 5.5" stroke="currentColor" stroke-width="4" />
				<path d="M12 3l8.5 5.5" opacity="0.6" stroke="currentColor" stroke-width="2" />
				<path d="M12 3l-8.5 5.5" stroke="currentColor" stroke-width="4" />
				<g stroke="currentColor" stroke-width="2">
					<path d="M12 3l-8.5 5.5" opacity="0.6" />
					<path d="M12 11.5v9" />
				</g>
			</g>
			<circle cx="12" cy="11.5" r="3.5" fill="currentColor" />
		</mask>
	</defs>
	<g fill="currentColor">
		<path d="M0 0h24v24H0z" mask="url(#SVGqPZgvZrE)" />
		<circle cx="12" cy="11.5" r="1.5" />
	</g>
    </Icon>
  );
}
