module.exports = function(grunt) {

    grunt.initConfig({

        // concat js
        concat: {

            global: {
                options: {
                    banner: '/* http://lorem.in  @author LoeiFy@gmail.com */ \n'
                },
                files: {
                    'dist/Diaspora.js': [
                        'assets/Diaspora.js'
                    ]
                }
            },

            plugin: {

                options: {
                    banner: 'window.DP={};\n'
                },

                files: {
                    'dist/plugin.js': [
                        'assets/Chocolate.js',
                        'assets/jquery.justifiedGallery.min.js',
                        'assets/jquery.parallax.js',
                        'assets/jquery.qrcode.min.js',
                        'assets/Vibrant.js'
                    ]
                }

            },

            css: {

                options: {
                    banner: '/* http://lorem.in  @author LoeiFy@gmail.com */ \n'
                },
                files: {
                    'dist/Diaspora.css': [
                        'assets/Diaspora.css',
                        'assets/icon.css'
                    ],
                    'dist/base.css': [
                        'assets/base.css'
                    ]
                }

            }

        },

        // replace string
        replace: {

            basket: {
                options: {
                    patterns: [
                        {
                            match: 'css',
                            replacement: '<%= grunt.file.read("dist/base.css") %>'
                        },
                        {
                            match: 'static',
                            replacement: '<%= grunt.file.read("assets/basket.html") %>'
                        }
                    ]
                },
                files: [
                    {src: ['_header.php'], dest: 'header.php'}
                ]
            }

        }

    });

    // grunt plugin
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-concat')

    grunt.registerTask('default', ['concat', 'replace'])

};
