const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = ({ config }) => {

  config.module.rules.push({
    // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
    //     the docs page from the markdown
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        options: {
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          reportFiles: ['stories/**/*.{ts|tsx}']
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        }
      }
    ]
  })

  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    exclude: [/node_modules/],
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
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

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = Object.assign(config.resolve.alias, { '@': path.resolve(__dirname, '..') })
  return config
}
