module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jsdoc: {
            dist: {
                src: ['sample.js'],
                options: {
                    destination:  'doc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc');
};
