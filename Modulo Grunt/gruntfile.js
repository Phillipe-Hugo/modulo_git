module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'main.less'
                }
            }
        },

        uglify: {
            options: {
              compress: true
            },
            dist: {
              files: {
                'dist/scripts/main.min.js': 'src/scripts/main.js'
              }
            }
          },

        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'src/styles/main.scss'
                }
            }
        },
        concurrent: {
            target: ['olaGrunt', 'less', 'sass']
        }
    });

    grunt.registerTask('olaGrunt', function(){
        console.log('Ola Grunt');
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concurrent', 'watch']);
    grunt.registerTask('build', ['less:production']);
    grunt.registerTask('build', ['less:production', 'uglify']);
};
