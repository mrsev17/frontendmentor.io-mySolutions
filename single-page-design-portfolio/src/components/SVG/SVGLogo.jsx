const SVGLogo = () => {
  return (
    <>
      <svg
        className="hidden sm:block"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#030303" d="M0 0h64v64H0z" />
          <circle stroke="#FFF7F0" strokeWidth="4" cx="32" cy="32" r="14" />
        </g>
      </svg>
      <svg
        className="block sm:hidden"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* <desc>Created with Pixso.</desc> */}
        <defs />
        <rect
          id="Rectangle Copy 8"
          width="48"
          height="48"
          fill="#030303"
          fillOpacity="1"
        />
        <circle
          id="Oval"
          cx="24"
          cy="24"
          r="10"
          stroke="#FFF7F0"
          strokeOpacity="1"
          strokeWidth="3"
        />
      </svg>
    </>
  )
}

export default SVGLogo
