export function JoystickIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="6" width="12" height="6" />
      <rect x="1" y="7" width="1" height="4" />
      <rect x="14" y="7" width="1" height="4" />
      <rect x="4" y="8" width="1" height="2" fill="var(--color-bg)" />
      <rect x="3" y="9" width="3" height="1" fill="var(--color-bg)" />
      <rect x="10" y="8" width="1" height="1" fill="var(--color-bg)" />
      <rect x="12" y="9" width="1" height="1" fill="var(--color-bg)" />
      <rect x="11" y="10" width="1" height="1" fill="var(--color-bg)" />
      <rect x="6" y="5" width="4" height="1" />
      <rect x="7" y="4" width="2" height="1" />
    </svg>
  );
}

export function CartridgeIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="2" width="10" height="10" />
      <rect x="4" y="12" width="2" height="2" />
      <rect x="7" y="12" width="2" height="2" />
      <rect x="10" y="12" width="2" height="2" />
      <rect x="5" y="4" width="6" height="3" fill="var(--color-bg)" />
      <rect x="5" y="9" width="6" height="1" fill="var(--color-bg)" />
    </svg>
  );
}

export function BoxIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="12" height="2" />
      <rect x="2" y="6" width="12" height="8" />
      <rect x="7" y="4" width="2" height="10" fill="var(--color-bg)" />
      <rect x="2" y="9" width="12" height="1" fill="var(--color-bg)" />
    </svg>
  );
}

export function HeartIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="3" height="3" />
      <rect x="11" y="4" width="3" height="3" />
      <rect x="1" y="5" width="14" height="4" />
      <rect x="2" y="9" width="12" height="1" />
      <rect x="3" y="10" width="10" height="1" />
      <rect x="4" y="11" width="8" height="1" />
      <rect x="5" y="12" width="6" height="1" />
      <rect x="6" y="13" width="4" height="1" />
      <rect x="7" y="14" width="2" height="1" />
    </svg>
  );
}
