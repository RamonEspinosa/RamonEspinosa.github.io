export const breakpoints = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};
const queries = {
  tabletAndUp: `(min-width: ${breakpoints.tabletMin}px)`,
  laptopAndUp: `(min-width: ${breakpoints.laptopMin}px)`,
  desktopAndUp: `(min-width: ${breakpoints.desktopMin}px)`,
};
export default queries;
