module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['systemjs', 'jasmine'],
    systemjs: {
      configFile: 'wwwroot/config.js',
      config: {
        paths: {
          "*": "*",
          "src/*": "src/*",
          "typescript": "node_modules/typescript/lib/typescript.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
          'jspm_packages/*': 'wwwroot/jspm_packages/*'
        },
        packages: {
          'test/unit': {
            defaultExtension: 'ts'
          },
          'src': {
            defaultExtension: 'ts'
          }
        },
        transpiler: 'typescript',
        typescriptOptions : {
          "module": "amd",
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true
        }
      },
      serveFiles: [
        'src/**/*.ts',
        'wwwroot/jspm_packages/**/*.js'
      ]
    },
    files: [
      'test/unit/setup.ts',
      'test/unit/*.ts'
    ],
    proxies:{
      '/base/jspm_packages/' : '/base/wwwroot/jspm_packages/'
    },
    exclude: [],
    preprocessors: { },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
