module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true, 
    "interactionDebugger":true
  },
  "staticDirs": [
    "../public"
  ],
  // que é onde tá o mockservice
  "viteFinal": (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignitelab-juliana.github.io/'
    }

    return config;
  }
}