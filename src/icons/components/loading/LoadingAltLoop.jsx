import Icon from "../../Icon";

export default function LoadingAltLoop({
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
		<circle cx="12" cy="3.5" r="1.5">
			<animate attributeName="fill-opacity" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="16.25" cy="4.64" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="0.2s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="0.2s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="19.36" cy="7.75" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="0.4s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="0.4s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="20.5" cy="12" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="0.6s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="0.6s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="19.36" cy="16.25" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="0.8s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="0.8s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="16.25" cy="19.36" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="1s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="1s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="12" cy="20.5" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="1.2s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="1.2s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="7.75" cy="19.36" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="1.4s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="1.4s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="4.64" cy="16.25" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="1.6s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="1.6s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="3.5" cy="12" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="1.8s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="1.8s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="4.64" cy="7.75" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="2s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="2s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
		<circle cx="7.75" cy="4.64" r="1.5" opacity="0">
			<set attributeName="opacity" to="1" begin="2.2s" fill="freeze" />
			<animate attributeName="fill-opacity" begin="2.2s" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.125;0.25;1" values="1;1;0;0" />
		</circle>
	</g>
    </Icon>
  );
}
