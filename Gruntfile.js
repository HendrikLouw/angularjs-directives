module.exports = function(grunt){
     var developmentPort = 8000;
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        karma:{
            watch:{
                configFile: './test/karma.conf.js'
            },
            unit:{
                configFile: './test/karma.conf.js',
                singleRun: true
            }
        },

        // connect: {
        //     server: {   
        //         options: {
        //             port: developmentPort,
        //             base: './src',
        //             hostname: '0.0.0.0'
        //         }
        //     }
        // },

        // open:{
        //     dev:{
        //         path: 'http://localhost:' + developmentPort + "index.html"
        //     }
        // },

        shell: {
            pythonServer: {
                options: {
                    stdout: true
                },
                command: 'python -m SimpleHTTPServer 4000'
            }
        }


    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');
    
    grunt.registerTask('test:watch', 'Run unit tests with code changes', ['karma:watch']);
    grunt.registerTask('test:unit', 'Run unit tests once', ['karma:unit']);
    grunt.registerTask('develop', 'Run server', ['shell:pythonServer',]);
};