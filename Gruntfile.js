module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jsdoc: {
            dist: {
                src: ['sample.js'],
                options: {
                    destination: 'doc',
                    template: "node_modules/ink-docstrap/template",
                    configure: "node_modules/ink-docstrap/template/jsdoc.conf.json"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc');
};

