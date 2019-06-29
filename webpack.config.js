const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = env => {

    // Get environment
    let environment = 'development';

    if (env) {
        environment = env.APP_ENV || environment;
    }

    // Get the root path (assuming your webpack config)
    const rootPath = path.join(__dirname);
    // Get base env file
    const basePath = rootPath + '/.env';

    // Get env path
    const envPath = basePath + '.' + environment;

    // Get local env path
    const localEnvPath = envPath + '.local';

    // Calculate final path
    let finalPath = basePath;

    if (fs.existsSync(localEnvPath)) {
        finalPath = localEnvPath
    } else if (fs.existsSync(envPath)) {
        finalPath = envPath
    }

    const fileEnv = dotenv.config({ path: finalPath }).parsed;

    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});

    return {
        mode: environment,
        entry: './src/index.tsx',
        performance: {
            hints: false,
            maxEntrypointSize: 400000,
            maxAssetSize: 100000,
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.ts');
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        {
                            loader: 'cache-loader'
                        },
                        {
                            loader: "awesome-typescript-loader"
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            // options: {},
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
        ],
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 9000,
            host: '0.0.0.0',
            noInfo: true,
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.[contenthash].js'
        },
        stats: {
            children: true,
        },
    }
};
