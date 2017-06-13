var path = require('path')
var webpack = require('webpack')
const { rules, loaders, plugins, stats } = require('webpack-atoms')

const browsers = ['last 2 versions', 'ie >= 10']

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '../examples/App.js'),
  output: {
    path: path.join(__dirname, '../examples/'),
    filename: 'bundle.js',
    publicPath: '/examples',
  },
  stats: stats.minimal,
  devServer: {
    port: 3000,
    stats: stats.minimal,
  },

  resolve: {
    alias: {
      'react-big-calendar$': path.resolve(__dirname + '/../src/index.js'),
      'react-big-calendar/lib': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      rules.js({}),
      rules.images(),
      rules.woff(),
      rules.css(),
      rules.less({ browsers }),
      {
        test: /\.md/,
        use: [...loaders.js({}), 'markdown-jsx-loader'],
      },
    ],
  },
  plugins: [
    plugins.extractText()
  ]
}
