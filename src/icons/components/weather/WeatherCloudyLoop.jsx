import Icon from "../../Icon";

export default function WeatherCloudyLoop({
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
      <path d="M7.1 10c0.46 -2.28 2.48 -4 4.9 -4c2.76 0 5 2.24 5 5v1h2c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3h-13c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<animate attributeName="d" dur="15s" repeatCount="indefinite" keyTimes="0;0.25;0.5;0.75;1" values="M7.1 10c0.46 -2.28 2.48 -4 4.9 -4c2.76 0 5 2.24 5 5v1h2c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3h-13c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4Z;M6.1 10c0.46 -2.28 2.48 -4 4.9 -4c2.76 0 5 2.24 5 5v1h3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3h-14c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4Z;M7.1 10c0.46 -2.28 2.48 -4 4.9 -4c2.76 0 5 2.24 5 5v1h3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3h-15c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4Z;M8.1 10c0.46 -2.28 2.48 -4 4.9 -4c2.76 0 5 2.24 5 5v1h2c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3h-14c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4Z;M7.1 10c0.46 -2.28 2.48 -4 4.9 -4c2.76 0 5 2.24 5 5v1h2c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3h-13c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4Z" />
	</path>
    </Icon>
  );
}
