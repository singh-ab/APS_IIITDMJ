// src/fonts/calsans.ts
const calsans = {
    fontFamily: "'Cal Sans', sans-serif",
    fontWeight: {
        regular: 400,
        bold: 700,
    },
    fontStyle: "normal",
    src: `
      url('/path/to/fonts/CalSans-Regular.woff2') format('woff2'),
      url('/path/to/fonts/CalSans-Bold.woff2') format('woff2')
    `,
};

export default calsans;