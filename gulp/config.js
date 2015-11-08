'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'src/styles/**/*.scss',
    'dest': 'dist/css'
  },

  'scripts': {
    'main': 'src/scripts/components/app.js',
    'src' : 'src/scripts/**/*',
    'dest': 'dist/js'
  },

  'images': {
    'src' : 'src/images/**/*',
    'dest': 'dist/images'
  },

  'views': {
    'watch': [
      'src/views/**/*.html',
      'src/**/views/*.html'
    ],
    'src': 'src/views/**/*.html',
    'dest': 'dist/views'
  },

  'dist': {
    'root': 'dist'
  },

  'browserify': {
    'entries'   : ['./src/scripts/vrealestate.js'],
    'bundleName': 'vrealestate.js'
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};