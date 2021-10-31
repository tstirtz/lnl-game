var path = require( 'path' );

const babelLoader = {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: {
              version: '3.16',
              proposals: true
            },
            targets: {
              browsers: [
                'last 3 Chrome major versions',
                'last 3 Firefox major versions',
                'last 3 Edge major versions',
                'last 3 Safari major versions'
              ]
            }
          }
        ]
      ]
    }
  };


module.exports =  (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: "./js/index.js",
        output: { 
            publicPath: '/',
            path: path.resolve(__dirname, './dist'),
            clean: true
        },
        mode: 'development',
        module: {
            rules: [
                // {
                //     test: /\.json$/,
                //     exclude: /(node_modules)/,
                //     include: path.join(__dirname, 'node_modules', 'pixi.js'),
                //     use: {
                //         loader: 'json',
                //     }
                // },
                {
                    test: /\.js?/,
                    exclude: /(node_modules)/,
                    include: path.resolve(__dirname, './'),
                    use: babelLoader
                  },
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                    },
                }
            }
        },
        devServer: {
            static: {
                directory: './',
              },
              compress: true,
        },
    }
};