module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../docs/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../node_modules/storybook-addon-customize-antd-theme/dist/esm/stories/index.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-customize-antd-theme"
  ]
}
