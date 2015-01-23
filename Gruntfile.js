module.exports = function(grunt) {
    grunt.initConfig({
      md2html: {
        multiple_files: {
          options: {
              layout: 'layout.html'
          },
          files: [{
            expand: true,
            src: ['docs/**/*.md'],
            dest: 'tmp',
            ext: '.html'
          }]
        }
      },
      watch: {
         files: ['docs/**', 'layout.html'],
         tasks: ['default']
      },
      clean: {
          build: ['tmp'],
          release: ['html'],
          releaseweb: ['html']
      },
      rename: {
          build: {
            src: 'tmp/docs',
            dest: 'html'
          },
          buildweb: {
            src: 'tmp/docs',
            dest: 'www'
          },
          buildwebindex: {
            src: 'www/README.html',
            dest: 'www/index.html'
          }
      }
    });

    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-rename');
    
    grunt.registerTask('default', ['clean:release', 'clean:build', 'md2html', 'rename:build', 'clean:build']);
    grunt.registerTask('www', ['clean:releaseweb', 'clean:build', 'md2html', 'rename:buildweb', 'rename:buildwebindex', 'clean:build']);
};