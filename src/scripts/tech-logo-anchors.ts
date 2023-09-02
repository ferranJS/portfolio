export default {
  driverjs: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://driverjs.com/">
    <svg class="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 139" fill="none"><path fill="white" d="M27.244 74.176v24.748c0 20.468 16.747 37.215 37.215 37.215 20.468 0 37.215-16.747 37.215-37.215V74.681c-21.899 10.226-52.833 10.065-74.43-.505Z"/><path fill="white" d="M108.222 71.141a61.112 61.112 0 0 1-6.548 3.54v24.243c0 .84-.038 1.67-.094 2.496.81.13 1.635.217 2.482.217 8.581 0 15.537-6.957 15.537-15.538 0-7.139-4.819-13.137-11.377-14.958Zm-80.978 3.035a59.758 59.758 0 0 1-5.773-3.234c-6.951 1.547-12.152 7.74-12.152 15.157 0 8.58 6.956 15.538 15.538 15.538.847 0 1.672-.086 2.482-.217a37.487 37.487 0 0 1-.094-2.495l-.001-24.75Z"/><path fill="#5B5D60" d="M17.335 62.302v2.808c0 1.917.95 3.706 2.53 4.79 23.99 16.451 66.283 16.448 90.27 0a5.809 5.809 0 0 0 2.53-4.79v-2.808c-27.225-8.534-65.025-9.5-95.33 0Z"/><path fill="white" d="M113.292 46.773c-8.193-3.772-17.197-6.56-26.61-8.26-6.758-1.222-13.626-1.724-20.493-1.73l-2.218-.003c-7.751-.007-15.504.623-23.102 2.158-8.299 1.677-16.435 4.264-24.157 7.831a3.645 3.645 0 0 0-2.035 4.132l2.659 11.4c30.305-9.499 68.105-8.534 95.33 0l2.659-11.397a3.642 3.642 0 0 0-2.033-4.13Z"/><path fill="white" d="M126.007 36.353C120.364 26.479 98.853 2.5 65 2.5 31.147 2.5 9.636 26.479 3.993 36.353c-4.184 7.323 5.591 13.09 10.924 15.584l-.241-1.035a3.645 3.645 0 0 1 2.035-4.132c7.722-3.567 15.858-6.155 24.157-7.831 7.598-1.535 15.351-2.165 23.102-2.158l2.218.002c6.867.006 13.736.509 20.493 1.73 9.413 1.701 18.417 4.489 26.61 8.261a3.64 3.64 0 0 1 2.032 4.131l-.241 1.032c5.335-2.494 15.109-8.261 10.925-15.584Z"/><path fill="#222" d="M64.459 138.638c-21.899 0-39.715-17.816-39.715-39.715V74.938a2.5 2.5 0 1 1 5 0v23.985c0 19.142 15.573 34.715 34.715 34.715 19.142 0 34.715-15.573 34.715-34.715V75.417a2.5 2.5 0 1 1 5 0v23.506c0 21.899-17.817 39.715-39.715 39.715Z"/><path fill="#222" d="M104.062 104.136c-.661 0-1.333-.043-2.055-.131a2.5 2.5 0 1 1 .607-4.963c.519.063.991.094 1.447.094 7.189 0 13.038-5.849 13.038-13.038a13.005 13.005 0 0 0-8.96-12.371 2.5 2.5 0 1 1 1.564-4.749 17.995 17.995 0 0 1 12.396 17.12c.001 9.946-8.091 18.038-18.037 18.038Zm-79.206 0c-9.946 0-18.038-8.092-18.038-18.038 0-7.92 5.303-15.027 12.896-17.283a2.498 2.498 0 0 1 3.108 1.685 2.5 2.5 0 0 1-1.685 3.108c-5.488 1.63-9.32 6.766-9.32 12.49 0 7.189 5.849 13.038 13.038 13.038a11.4 11.4 0 0 0 1.216-.068 2.5 2.5 0 0 1 .525 4.973c-.608.063-1.177.095-1.74.095ZM65 115.573c-4.776 0-9.262-1.95-11.999-5.215a2.5 2.5 0 0 1 3.832-3.212c1.798 2.146 4.852 3.427 8.167 3.427 3.315 0 6.368-1.281 8.167-3.427a2.501 2.501 0 0 1 3.832 3.213c-2.738 3.265-7.224 5.214-11.999 5.214Zm16.789-22.757a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-33.578 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path fill="#222" d="M65 84.714c-17.077.001-34.149-4.25-46.549-12.753a8.31 8.31 0 0 1-3.616-6.852v-2.546a2.5 2.5 0 1 1 5 0v2.546a3.31 3.31 0 0 0 1.444 2.728c23.291 15.972 64.151 15.972 87.442 0a3.31 3.31 0 0 0 1.444-2.728v-2.655a2.5 2.5 0 1 1 5 0v2.655a8.31 8.31 0 0 1-3.616 6.852C99.151 80.462 82.073 84.713 65 84.714Z"/><path fill="#222" d="M17.335 64.802A2.499 2.499 0 0 1 14.9 62.87l-2.659-11.4c-.658-2.819.782-5.75 3.421-6.969 7.712-3.562 16.026-6.258 24.71-8.013 7.291-1.472 15.267-2.196 23.6-2.207l2.218.002c7.536.007 14.384.586 20.936 1.77 9.675 1.748 18.83 4.591 27.212 8.45 2.64 1.216 4.079 4.147 3.421 6.969L115.1 62.87a2.503 2.503 0 0 1-3.182 1.818c-28.5-8.934-65.332-8.933-93.834 0a2.535 2.535 0 0 1-.749.114ZM65 53.002c15.877 0 31.756 2.046 45.836 6.136l2.054-8.802a1.146 1.146 0 0 0-.644-1.292c-7.998-3.683-16.749-6.398-26.009-8.072-6.257-1.13-12.815-1.683-20.051-1.69l-2.218-.002h-.128c-7.99 0-15.551.709-22.477 2.108-8.304 1.678-16.245 4.251-23.604 7.65a1.15 1.15 0 0 0-.649 1.294l2.054 8.804c14.081-4.088 29.96-6.134 45.836-6.134Z"/><path fill="#222" d="M14.582 54.28c-.361 0-.727-.078-1.074-.244C8.661 51.724 2.54 47.87.902 42.635c-.782-2.499-.463-5.099.921-7.521C7.404 25.347 29.632 0 65 0c35.367 0 57.597 25.347 63.178 35.113 1.384 2.422 1.702 5.023.92 7.521-1.638 5.234-7.757 9.088-12.602 11.399a2.502 2.502 0 0 1-3.333-1.18 2.501 2.501 0 0 1 1.181-3.333c5.498-2.624 9.137-5.678 9.982-8.38.371-1.186.216-2.313-.49-3.547C118.655 28.528 97.986 5 65 5 32.013 5 11.345 28.528 6.164 37.594c-.706 1.235-.861 2.362-.49 3.548.846 2.703 4.486 5.757 9.986 8.381a2.5 2.5 0 0 1-1.078 4.757Z"/></svg>
  </a>
`,
  tailwind: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://tailwindcss.com/">
    <i class="devicon-tailwindcss-plain text-2xl sm:text-3xl"></i>
  </a>
`,
  javascript: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://developer.mozilla.org/es/docs/Web/API/Canvas_API">
    <i class="devicon-javascript-plain text-[1.4rem] sm:text-[1.7rem]"></i>
  </a>
`,
  angular: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://angular.io/">
    <i class="devicon-angularjs-plain text-2xl sm:text-3xl"></i>
  </a>
`,
  astro: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://astro.build/">
    <svg class="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="logosandtypes_com" data-name="logosandtypes com" viewBox="0 0 150 150" fill="var(--color-base-text)">
      <defs>
        <style>
          .cls-1 { fill: none }
          .cls-2 { fill: var(--color-base-text) }
        </style>
        <linearGradient id="linear-gradient" x1="75.54" y1="113" x2="75.54" y2="143.15" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="white"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <path id="Layer_3" data-name="Layer 3" class="cls-1" d="M0,0H150V150H0V0Z"/>
      </g>
      <path class="cls-2" d="M57.53,128.19c-5.86-5.34-7.57-16.57-5.13-24.7,4.23,5.13,10.1,6.75,16.17,7.67,10.41,1.56,21.21,.76,30.3-5.19,2.64,7.89-1.02,16.49-7.6,21.14-8.36,5.63-14.92,8.86-10.92,20.26-6.02-2.64-9.6-8.59-9.64-15-.02-1.6-.02-3.21-.24-4.79-.53-3.84-2.33-5.56-5.74-5.66-3.89-.16-6.6,2.57-7.21,6.27h0Z"/>
      <path d="M24.1,102.13s17.35-8.43,34.74-8.43l13.12-40.49c.49-1.96,1.92-3.29,3.54-3.29s3.05,1.33,3.54,3.29l13.12,40.49c20.6,0,34.74,8.43,34.74,8.43,0,0-29.47-80.07-29.52-80.23-.85-2.37-2.27-3.89-4.2-3.89H57.82c-1.92,0-3.29,1.52-4.2,3.89-.06,.16-29.53,80.23-29.53,80.23Z"/>
    </svg>
  </a>
`,
  astroWhite: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://astro.build/">
    <svg class="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="logosandtypes_com" data-name="logosandtypes com" viewBox="0 0 150 150" fill="white">
      <defs>
        <style>
          .cls-1 { fill: none }
          .cls-2 { fill: white }
        </style>
        <linearGradient id="linear-gradient" x1="75.54" y1="113" x2="75.54" y2="143.15" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="white"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <path id="Layer_3" data-name="Layer 3" class="cls-1" d="M0,0H150V150H0V0Z"/>
      </g>
      <path class="cls-2" d="M57.53,128.19c-5.86-5.34-7.57-16.57-5.13-24.7,4.23,5.13,10.1,6.75,16.17,7.67,10.41,1.56,21.21,.76,30.3-5.19,2.64,7.89-1.02,16.49-7.6,21.14-8.36,5.63-14.92,8.86-10.92,20.26-6.02-2.64-9.6-8.59-9.64-15-.02-1.6-.02-3.21-.24-4.79-.53-3.84-2.33-5.56-5.74-5.66-3.89-.16-6.6,2.57-7.21,6.27h0Z"/>
      <path d="M24.1,102.13s17.35-8.43,34.74-8.43l13.12-40.49c.49-1.96,1.92-3.29,3.54-3.29s3.05,1.33,3.54,3.29l13.12,40.49c20.6,0,34.74,8.43,34.74,8.43,0,0-29.47-80.07-29.52-80.23-.85-2.37-2.27-3.89-4.2-3.89H57.82c-1.92,0-3.29,1.52-4.2,3.89-.06,.16-29.53,80.23-29.53,80.23Z"/>
    </svg>
  </a>
`,
  ionic: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://ionicframework.com/">
    <i class="devicon-ionic-original text-2xl sm:text-3xl"></i>
  </a>
`,
  capacitor: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://capacitorjs.com/">
    <svg viewBox="0 0 512 512" fill="none" class="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg">
      <path fill="var(--color-base-text)" d="M480 101.09L372.37 208.72l106.86 107.06l-69.3 69.3l-283.22-283.23L196 32.54l107.07 106.88L410.67 32ZM32.55 196l69.3-69.31l283.22 283.24l-69.3 69.3l-107-106.87L101.08 480L32 410.67l107.42-107.61Z"/>
    </svg>
  </a>
`,
  capacitorWhite: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://capacitorjs.com/">
    <svg viewBox="0 0 512 512" fill="none" class="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M480 101.09L372.37 208.72l106.86 107.06l-69.3 69.3l-283.22-283.23L196 32.54l107.07 106.88L410.67 32ZM32.55 196l69.3-69.31l283.22 283.24l-69.3 69.3l-107-106.87L101.08 480L32 410.67l107.42-107.61Z"/>
    </svg>
  </a>
`,
  // fill="var(--color-base-text)
  vercel: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://vercel.com/">
    <svg viewBox="0 0 1155 1000" fill="none" class="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg">
      <path fill="var(--color-base-text)" d="M577.344 0L1154.69 1000H0L577.344 0Z" />
    </svg>
  </a>
`,
  vercelWhite: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://vercel.com/">
    <svg viewBox="0 0 1155 1000" fill="none" class="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M577.344 0L1154.69 1000H0L577.344 0Z"/>
    </svg>
  </a>
`,
  figma: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://www.figma.com/">
    <i class="devicon-figma-plain text-2xl sm:text-3xl"></i>
  </a>
`,
  mySQL: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://www.mysql.com/">
    <i class="devicon-mysql-plain text-2xl sm:text-3xl"></i>
  </a>
`,
  php: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://www.php.net/manual/en/intro-whatis.php">
    <i class="devicon-php-plain text-3xl sm:text-4xl"></i>
  </a>
`,
  firebase: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://firebase.google.com/">
    <i class="devicon-firebase-plain text-[1.7rem] sm:text-[2rem]"></i>
  </a>
`,
  java: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://www.java.com/en/">
    <i class="devicon-java-plain text-2xl sm:text-3xl"></i>
  </a>
`,
  androidStudio: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://developer.android.com/">
    <i class="devicon-androidstudio-plain text-2xl sm:text-3xl"></i>
  </a>
`,
  xcode: `
  <a class="hover:scale-110 duration-200" target="_blank" href="https://developer.apple.com/xcode/">
    <i class="devicon-xcode-plain text-2xl sm:text-3xl"></i>
  </a>
`,
}
