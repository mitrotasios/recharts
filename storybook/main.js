module.exports = {
  stories: [
    // The order of stories here reflects the order in the sidebar.
    './stories/Welcome.mdx',
    './stories/Installation.mdx',
    './stories/GettingStarted.mdx',
    './stories/**/*.mdx',
    './stories/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  features: {
    interactionsDebugger: true,
  },
  docs: {
    autodocs: true,
  },
};
