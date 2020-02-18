const path = require('path')
module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript', prettierConfig: {
            printWidth: 80,
            tabWidth: 2,
            bracketSpacing: true,
            semi: false,
            trailingComma: 'es5',
            singleQuote: true,
          }
        },
      },
    ],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          reportFiles: ['stories/**/*.{ts|tsx}']
        }
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = Object.assign(config.resolve.alias, { '@': path.resolve(__dirname, '..') })
  return config
}
