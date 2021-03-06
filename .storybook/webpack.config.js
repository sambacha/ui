const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;

module.exports = ({ config }) => {
    let tsconfigPath = __dirname + "/../tsconfig.storybook.json";

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    getCustomTransformers: () => ({ before: [createStyledComponentsTransformer()] }),
                    configFile: tsconfigPath
                }
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
                options: {
                    tsconfigPath: tsconfigPath
                }
            }
        ],
    });

    config.module.rules.push({
        test: /\.stories\.tsx?$/,
        loaders: [{
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: "typescript" }
        }],
        enforce: 'pre',
    });

    let esLintLoaderIndex = config.module.rules.findIndex(r => r.use && r.use.find(u => u.loader && u.loader.match(/eslint-loader/)));
    if (esLintLoaderIndex !== -1) {
        config.module.rules.splice(esLintLoaderIndex, 1);
    }

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
