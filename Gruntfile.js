/*global module:false*/
module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        requirejs: {
            compile: {
                options: {
                    baseUrl: "web/app/js",
                    mainConfigFile: "web/app/js/main.js",
                    name: "main",
                    out: "web/js/optimized.js",
                    optimize: "none",
                    // useStrict: true,
                }
            }
        },

        watch: {
          scripts: {
            files: ['web/app/**/*js', 'web/app/**/*.html'],
            tasks: ['ngtemplates', 'requirejs'],
            options: {
              interrupt: true,
            }
          }
        },

        ngtemplates: {
            utilitiesApp: {
                cwd: 'web',
                src: 'app/partials/**/*.html',
                dest: 'web/js/templates.js',
                options: {
                    prefix: '/',
                    bootstrap: function (module, script) {
                        return 'define(["app"], function (app) { app.run(["$templateCache", function($templateCache) { if (Techversed.requirejsDebug && Techversed.env == "dev") { return; } ' + script + '}]) })'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', 'requirejs:compile');
};
