import { css, fontFace } from "emotion"

fontFace`
  font-family: 'CitrixIconFont';
  src: url(https://cdn.octoblu.com/fonts/citrixicons.eot);
  src: url(https://cdn.octoblu.com/fonts/citrixicons.eot?#iefix) format('eot'),
  url(https://cdn.octoblu.com/fonts/citrixicons.woff) format('woff'),
  url(https://cdn.octoblu.com/fonts/citrixicons.ttf) format('truetype'),
  url(https://cdn.octoblu.com/fonts/citrixicons.svg#CitrixIconFont) format('svg');
`

export const SIZES = {
  "extra-small": "22px",
  small: "32px",
  regular: "48px",
  large: "96px",
}

export const spinnerBase = css`
  position: absolute;
  display: inline-block;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: inherit;
  font-family: 'CitrixIconFont';
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
