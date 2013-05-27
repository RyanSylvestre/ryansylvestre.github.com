module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            target: {
                files: {
                    'src/js/application.js': ['src/_assets/bootstrapjs/*.js', 'src/_assets/application.js']
                }
            }
        },
        less: {
            target: {
                files: {
                    "src/css/main.css": "src/_assets/application.less"
                }
            }
        },
        jekyll: {
            server: {
                server: true,
                server_port: 4000,
                auto: true
            }
        },
        watch: {
            less: {
                files: ['src/_assets/**/*.less'],
                tasks: ['less']
            },
            uglify: {
                files: ['src/_assets/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['jekyll:server']);

};