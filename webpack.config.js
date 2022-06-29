const thePath = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

module.exports = {
  mode:"development",
  entry:"./src/index.js",
  output:{
    path:thePath.resolve(__dirname,"dist"),
    filename:"main.js",
    assetModuleFilename: 'images/[name][ext]'
  },
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      template:"src/index.html",
      inject:"body"
    }),
    new MiniCssExtractPlugin({filename:"main.min.css"}), 
  ],
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                { name: 'preset-default',
                params: {
                  overrides: {
                    convertShapeToPath: {
                      convertArcs: true
                    },
                    convertPathData: false
                  }
                }
                },
              ],
            ],
          },
        },
      }),
    ],
  },
}