enum BreakpointsAproach {
  MOBILE = "min-width",
  DESKTOP = "max-width",
}

const createBreakpoints = <T>(sizes: T, aproach: BreakpointsAproach) =>
  Object.assign(
    {},
    ...Object.keys(sizes).map((key) => ({
      [key]: `(${aproach}: ${sizes[key as keyof T]}px)`,
      custom: (value: number) => `(${aproach}: ${value}px)`,
    }))
  );

export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  up: {
    ...createBreakpoints(size, BreakpointsAproach.MOBILE),
  },
  down: {
    ...createBreakpoints(size, BreakpointsAproach.DESKTOP),
  },
};
