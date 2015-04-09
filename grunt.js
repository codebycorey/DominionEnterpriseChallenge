module.export = function(grunt) {
  grunt.initConfig({
    meta: {
      banner: '/* My CSS was minified using Grunt
                * Original file style.css
                * New file style.min.css
                * Author: Corey ODonnell
                * <% grunt.template.today() %> */'
    },
    min: {
      dis: {
        src: ['<banner>', 'css/style.css'],
        dest: 'style.min.css'
      }
    },
    watch: {
      files: ['css/style.css'],
      tasks: ['min:dist']
    }
  });
  grunt.registerTask('default', [
    'min:dist'
    ]);
};
