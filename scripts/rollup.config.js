var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var globals = require('rollup-plugin-node-globals');
var builtins = require('rollup-plugin-node-builtins');
var json = require('rollup-plugin-json');


// https://github.com/rollup/rollup/wiki/JavaScript-API

var rollupConfig = {
  /**
   * entry: The bundle's starting point. This file will
   * be included, along with the minimum necessary code
   * from its dependencies
   */
  entry: process.env.IONIC_APP_ENTRY_POINT,

  /**
   * sourceMap: If true, a separate sourcemap file will
   * be created.
   */
  sourceMap: process.env.IONIC_GENERATE_SOURCE_MAP ? true : false,

  /**
   * format: The format of the generated bundle
   */
  format: 'iife',

  /**
   * dest: the output filename for the bundle in the buildDir
   */
  dest: process.env.IONIC_OUTPUT_JS_FILE_NAME,

  /**
   * Firebase 'cannot read property navigator of undefined' fix
   */
  useStrict: false,

  /**
   * plugins: Array of plugin objects, or a single plugin object.
   * See https://github.com/rollup/rollup/wiki/Plugins for more info.
   */
  plugins: [
    builtins(),
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/angularfire2/**',
        'node_modules/angular2-uuid/**',
        'node_modules/ng2-facebook-sdk/**',
        'node_modules/localforage/**',
        'node_modules/ts-md5/**'
      ],
      namedExports: {
        'node_modules/angularfire2/node_modules/firebase/firebase-browser.js': ['initializeApp', 'auth', 'database']
      }
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js']
    }),
    globals(),
    json()
  ]

};



module.exports = rollupConfig;
