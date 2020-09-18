import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    prism: {
      ...novelaTheme.colors.prism,
      background: "#2E2C31"
    },
    modes: {
      dark: {
        ...novelaTheme.colors.modes.dark,
        grey: "#C4C4C5",
        primary: "#AB93C9",
        secondary: "#D698B9",
        accent: "#EDA1AB",
        background: "#1E1C21",
        // hover: "rgba(255, 255, 255, 0.07)",
        gradient: "#1E1C21",
        articleText: "#E2E1E2",
        // track: "rgba(255, 255, 255, 0.3)",
        progress: "#E2E1E2",
        card: "#2E2C31",
        error: "#ff6961",
        errorBackground: "rgba(255, 105, 97, 0.1)",
        horizontalRule: "rgba(226, 225, 226, 0.2)",
        inputBackground: "rgba(226, 225, 226, 0.07)",
      },
    },
  },
};