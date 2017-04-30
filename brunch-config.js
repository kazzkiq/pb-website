// See http://brunch.io for documentation.

module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  modules: {
    autoRequire: { 'app.js': ['initialize'] }
  }
}