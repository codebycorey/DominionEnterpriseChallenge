module.exports = function(grunt) {
  grunt.initConfig({
    cssmin:{
      min: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: ['css/**/*.css'],
        tasks: ['cssmin'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['cssmin', 'watch']);
};