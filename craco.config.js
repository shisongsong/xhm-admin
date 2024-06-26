const webpack = require('webpack');
const CracoAlias = require('craco-alias');
const sassResourcesLoader = require('craco-sass-resources-loader');
const WebpackBar = require('webpackbar');
const child_process = require('child_process');
const packageJson = require('./package.json');

function git(command) {
    return child_process.execSync(`git ${command}`, { encoding: 'utf8' }).trim();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (webpackEnv) => {
    // console.log('🔥webpackEnv💥 ', webpackEnv);
    // const isEnvDevelopment = webpackEnv.env === 'development';
    // const isEnvProduction = webpackEnv.env === 'production';
    // console.log('🔥isEnvDevelopment💥 ', isEnvDevelopment);
    // console.log('🔥isEnvProduction💥 ', isEnvProduction);

    return {
        devServer: {
            port: 3030,
            open: false,
            proxy: {
                '/api': {
                    // api configed @ https://www.fastmock.site/#/projects
                    target: 'https://www.fastmock.site/mock/3f8aadaa647b2be78bcf25cea100d49f/steven-test',
                    changeOrigin: true,
                    ws: true,
                    secure: true,
                },
            },
        },
        plugins: [
            {
                plugin: CracoAlias,
                options: {
                    source: 'tsconfig',
                    // baseUrl SHOULD be specified
                    // plugin does not take it from tsconfig
                    baseUrl: './src/',
                    // as you know, CRA doesn't allow to modify tsconfig's compilerOptions
                    // so you should create a separate JSON file and extend tsconfig.json from it
                    // and then just specify its path here:
                    tsConfigPath: 'tsconfig.paths.json',
                },
            },
            {
                plugin: sassResourcesLoader,
                options: {
                    resources: ['./src/styles/export.scss'],
                },
            },
        ],
        webpack: {
            plugins: [
                new WebpackBar({ profile: true }),
                new webpack.DefinePlugin({
                    'process.env.BUILD_INFO': JSON.stringify(packageJson),
                }),
                new webpack.EnvironmentPlugin({
                    GIT_VERSION: git('describe --always'),
                    GIT_AUTHOR_DATE: git('log -1 --format=%aI'),
                }),
            ],
        },
    };
};
