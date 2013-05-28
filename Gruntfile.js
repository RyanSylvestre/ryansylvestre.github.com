module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            target: {
                files: {
                    'js/application.js': ['_assets/bootstrapjs/*.js', '_assets/application.js']
                }
            }
        },
        less: {
            target: {
                files: {
                    "css/main.css": "_assets/application.less"
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
                files: ['_assets/**/*.less'],
                tasks: ['less']
            },
            uglify: {
                files: ['_assets/**/*.js'],
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