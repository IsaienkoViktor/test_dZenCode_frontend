export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFB801",
    blue: "#002a58",
    red: "#e23131",
    green: "#57d206",
    lightBlue: "#1e07eb",
  },

  spacing: (value) => `${4 * value}px`,

  fontSizes: {
    xss: "12px",
    xs: "18px",
    s: "20px",
    m: "28px",
    l: "32px",
    xl: "36px",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  borders: {
    none: "none",
    normal: "1px solid",
    medium: "2px solid ",
  },

  radii: {
    none: "0",
    round: "50%",
    xs: "10px",
  },

  shadows: {
    primary: "0px 10px 10px 0px rgba(0, 0, 0, 0.25)",
    secondary: "7px 13px 14px rgba(116, 177, 232, 0.24)",
  },

  transitions: {
    regular: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
