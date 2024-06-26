export const BgPatternOne = () => {
  return (
    <div className="absolute top-[-40px] right-0 tablet:right-[-40px] z-[-1] iphone:hidden">
      <svg width="312" height="468" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M78 0c43.078 0 78 34.922 78 78v234h-56C44.772 312 0 267.228 0 212V78C0 34.922 34.922 0 78 0Z"
            fill="#66E2DC"
          />
          <path
            d="M156 312h78c43.078 0 78 34.922 78 78s-34.922 78-78 78-78-34.922-78-78v-78Z"
            fill="#191826"
          />
          <rect fill="#FFB964" x="234" y="78" width="78" height="78" rx="39" />
          <rect fill="#FA7453" x="234" width="78" height="78" rx="39" />
          <rect fill="#FA7453" y="312" width="156" height="156" rx="78" />
          <rect fill="#191826" x="156" width="78" height="156" rx="39" />
          <rect
            stroke="#191826"
            strokeWidth="2"
            x="157"
            y="157"
            width="154"
            height="154"
            rx="77"
          />
          <rect
            stroke="#191826"
            strokeWidth="2"
            x="157"
            y="196"
            width="76"
            height="76"
            rx="38"
          />
        </g>
      </svg>
    </div>
  )
}
