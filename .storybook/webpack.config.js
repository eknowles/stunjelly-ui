// const genDefaultConfig = require('@storybook/core/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const nanoConfig = require('../cssnano.config');

// load the default config generator.
module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig;
  // const config = genDefaultConfig.createDefaultWebpackConfig(baseConfig, env);

  // Extend it as you need.
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push({
    test: /\.pcss$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          modules: true,
          config: {
            path: '../'
          },
          sourceMap: true,
          plugins: (loader) => [
            require('postcss-import')({ root: loader.resourcePath }),
            require('postcss-preset-env')(),
            require('cssnano')(nanoConfig)
          ],
        }
      }
    ]
  });
  config.resolve.extensions.push('.pcss');

  return config;
};
