module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      overPass: ['"Overpass", "sans-serif"'],
      ubuntu: ['"Ubuntu", "sans-serif"'],
    },
    colors: {
      ctaText: "hsl(356, 100%, 66%)",
      ctaHoverBg: "hsl(355, 100%, 74%)",
      heading: "hsl(208, 49%, 24%)",
      text: "hsl(0, 0%, 100%)",
      footerText: "hsl(240, 2%, 79%)",
      footerBg: "hsl(240, 10%, 16%)",
      bodyCopy: "hsl(207, 13%, 34%)",
      /*Background gradient - Intro/CTA mobile nav: */
      veryLightRed: "hsl(13, 100%, 72%)",
      lightRed: "hsl(353, 100%, 62%)",

      /*Background gradient - body*/
      veryDGB: "hsl(237, 17%, 21%)",
      veryDDB: "hsl(237, 23%, 32%)",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1120px',
    },
    extend: {},
  },
  plugins: [],
};
