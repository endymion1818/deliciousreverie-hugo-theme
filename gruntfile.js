module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
        js: {
          files: {
            './static/js/deliciousreverie-noncriticalscripts.js': ['./source/js/noncritical/*.js'],
            './static/js/deliciousreverie-footerscripts.js': ['./source/js/footer/*.js'],
          },
        },
      },
      uglify: {
        my_target: {
          files: {
            './static/js/deliciousreverie-noncriticalscripts.min.js': ['./static/js/deliciousreverie-noncriticalscripts.js'],
            './static/js/deliciousreverie-footerscripts.min.js': ['./static/js/deliciousreverie-footerscripts.js']
          }
        }
      },
      sass: {
        dist: {
          files: {
            './static/css/deliciousreverie.css': './source/sass/all.scss'
          }
        }
      },
      cssmin : {
        css:{
          src: './static/css/deliciousreverie.css',
          dest: './static/css/deliciousreverie.min.css'
        }
      },
      postcss: {
        options: {
          map: { inline: false }, // inline sourcemaps
          processors: [
            require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
            // require('cssnano')() // minify the result
          ]
        },
        dist: {
          src: './static/css/*.css'
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', [
    'concat',
    'uglify',
    'sass',
    'cssmin',
    'postcss'
    ]);
};
