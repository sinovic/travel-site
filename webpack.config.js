module.exports = {
    entry: __dirname + "/app/assets/scripts/App.js",
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: "App.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            },

            // Loaders for other file types can go here
        ],
    },
    // …
};