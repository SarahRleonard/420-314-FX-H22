import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: 'deepbluesky',
    colorSecondary: 'darkorange',

    // UI
    appBg: 'white',
    appContentBg: 'silver',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: 'black',
    barBg: 'darkslategrey',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,
    brandTitle: 'Mon storybook',
    brandUrl: 'https://storybook.js.org',
});