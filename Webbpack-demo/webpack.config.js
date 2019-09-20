const path = require("path");

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
};