module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'babel-eslint',
    extends: ['airbnb'],
    plugins: [],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js'],
            },
            webpack: {
                config: ['webpack.config.js', 'webpack.common.config.js'],
                extensions: ['.js'],
            },
        },
        'import/parser': 'babel-eslint'
    }
};