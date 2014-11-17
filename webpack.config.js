var webpack = require('webpack');

module.exports = {

    context: __dirname + "/app",

    entry: {
        // main script
        app: './index',
        // common scripts
        common: 'vendor/commons'
    },

    output: {
        path: __dirname + "/public/js",
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        publicPath: "js/"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff&name=../fonts/[hash].woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream&name=../fonts/[hash].ttf" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file?name=../fonts/[hash].eot" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml&name=../fonts/[hash].svg" }
        ]
    },

    plugins: [
        new webpack.PrefetchPlugin("react"),
        new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment"),
        // new webpack.optimize.CommonsChunkPlugin("init.js"),
        new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
        new webpack.ProvidePlugin({
            $: "vendor/jquery",
            jQuery: "vendor/jquery",
            // "windows.jQuery": "vendor/jquery",
            // "window.React": "react",
            React: "react",
            Backbone: "backbone"
        })
    ],

    resolve: {
        alias: {
            components: __dirname + '/app/components',
            actions: __dirname + '/app/actions',
            stores: __dirname + '/app/stores',
            contracts: __dirname + '/app/contracts',
            lib: __dirname + '/app/lib',
            app: __dirname + '/app',
            modules: __dirname + '/app/modules',
            vendor: __dirname + '/app/vendor',
            node_modules: __dirname + '/node_modules',
            jquery: __dirname + '/app/vendor/jquery'
        }
    }

};