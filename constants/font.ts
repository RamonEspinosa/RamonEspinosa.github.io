export const BASE_FONT_SIZE = 16;

const generateFontSize = (from, to) =>
  Array.from({ length: to - from + 1 })
    .map((_, i) => i)
    .reduce((prev, current) => {
      prev[from + current] = `${(from + current) / BASE_FONT_SIZE}rem`;
      return prev;
    }, {});

const font = {
  primary: `"Inter", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  secondary: `"Source Code Pro", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
  helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  size: generateFontSize(8, 96),
};
export default font;
