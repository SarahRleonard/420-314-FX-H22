module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../docs/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../node_modules/storybook-addon-material-ui/dist/muiTheme.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "storybook-addon-material-ui"
  ]
}
