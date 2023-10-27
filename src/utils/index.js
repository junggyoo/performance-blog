/* 파라미터 참고: https://unsplash.com/documentation#supported-parameters */
export function getParametersForUnsplash({ width, height, quality, format }) {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
}
