export function RotatingLogo() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="animate-spin-slow text-primary"
      style={{ animationPlayState: "running" }}
    >
      <defs>
        <path
          id="circle"
          d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"
        />
      </defs>
      <circle cx="50" cy="50" r="50" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      <text width="100" className="text-xs" fill="currentColor">
        <textPath xlinkHref="#circle" startOffset="0%">
          © Mushangi Patrick Portfolio • Mushangi Patrick Portfolio •
        </textPath>
      </text>
    </svg>
  );
}
