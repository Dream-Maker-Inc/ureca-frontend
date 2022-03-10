module.exports = {
  presets: ["next/babel", "@emotion/babel-preset-css-prop"],
  plugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "@mui/icons-material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "icons",
    ],
  ],
};
