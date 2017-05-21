// See http://brunch.io for documentation.

module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  plugins: {
    babel: {presets: ['latest', 'react']},
    postcss: {processors: [require('autoprefixer')]}
  },
  modules: {
    autoRequire: { 'app.js': ['initialize'] }
  }
}