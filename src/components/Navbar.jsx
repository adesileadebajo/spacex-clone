import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div>
        <a className="logo" href="">
          <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 400 50"
            aria-hidden="true"
          >
            <title>SpaceX Logo</title>
            <g className="letter_s">
              <path
                className="fill-white"
                d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
          c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"
              ></path>
            </g>
            <g className="letter_p">
              <path
                class="fill-white"
                d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
          c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"
              ></path>
            </g>
            <g class="letter_a">
              <polygon
                className="fill-white"
                points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"
              ></polygon>
            </g>
            <g className="letter_c">
              <path
                className="fill-white"
                d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
          c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"
              ></path>
            </g>
            <g class="letter_e">
              <polygon
                className="fill-white"
                points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"
              ></polygon>
              <rect
                className="fill-white"
                x="219.9"
                y="18.6"
                width="41.9"
                height="5.4"
              ></rect>
            </g>
            <g class="letter_x">
              <path
                className="fill-white"
                d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"
              ></path>
              <path
                className="fill-white"
                d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"
              ></path>
            </g>
            <g className="letter_swoosh">
              <path
                className="fill-white"
                d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"
              ></path>
            </g>
          </svg>
        </a>
      </div>

      <div className="flex gap-4 hidden lg:flex md:hidden sm:hidden">
        <a href="">FALCON 9</a>
        <a href="">FALCON HEAVY</a>
        <a href="">DRAGON</a>
        <a href="">STARSHIP</a>
        <a href="">HUMAN SPACELIGHT</a>
        <a href="">RIDESHARE</a>
        <a href="">STARSHIELD</a>
        <a href="">STARLINK</a>
      </div>

      <div className="flex xlex-row gap-4">
        <a href="" className="hidden md:flex">
          SHOP
        </a>
        <button>| | |</button>
      </div>
    </nav>
  );
}
