module.exports = function(grunt) {

  'use strict';

  // increase package version
  var pkg = grunt.file.readJSON('package.json');
  var VERSION = pkg.version;
  pkg.version = pkg.version.split(".");
  var subversion = pkg.version.pop();
  subversion++;
  pkg.version.push(subversion);
  pkg.version = pkg.version.join(".");
  pkg.PREVIOUS_VERSION = VERSION;
  grunt.file.write('package.json', JSON.stringify(pkg, null, 2));  

  // update qext version
  var qext = grunt.file.readJSON(pkg.name + '.qext');
  var qdes = qext.description;
  var qdesc = qdes.split(";");
  qext.description = qdesc[0] + "; version " + pkg.version;
  qext.version = pkg.version;
  grunt.file.write(pkg.name + '.qext', JSON.stringify(qext, null, 2));

// Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license %> */\n',
    
    // Task configuration.
    clean: {
      build: {
               src: ['dist']
      },
      src: {
               src: ['src']
      }
    },
    replace: {
      build: {
        src: ['<%= pkg.name %>.js'],
        dest: ['dist/<%= pkg.name %>.replace-text.js'],
        replacements: [ { 
          from: 'properties',
          to: 'properties.min'
        } ]
      },
      version: {
        src: [ 'js/properties.js' ],
        dest: [ 'js/properties.js' ],
        replacements: [ {
          from: 'label: "<%= pkg.PREVIOUS_VERSION %>"', 
          to: 'label: "<%= pkg.version %>"'
        }]
      },      
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/jquery.<%= pkg.name %>.js'],
        dest: 'dist/jquery.<%= pkg.name %>.js'
      },
      build: {
        files: {
          'dist/js/properties.js' : ['src/js/properties.js'],
          'dist/<%= pkg.name %>.js' : ['src/<%= pkg.name %>.js']
        },
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/jquery.<%= pkg.name %>.min.js'
      },
      build: {
        files: {
          'dist/js/properties.min.js' : ['dist/js/properties.js'],
          'dist/<%= pkg.name %>.min.js' : ['dist/<%= pkg.name %>.js']
        },
      },
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      options: {
        jshintrc: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['src/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
    },
    copy: {
      src: {
        files: [ {expand: true,
                  filter: 'isFile',
                  src: ['css/**', 'js/**', '<%= pkg.name %>.*' ],
                  dest: 'src'} ]
      },
      build: {
        files: [ {expand: true,
                  src: ['<%= pkg.name %>.png', '<%= pkg.name %>.qext'],
                  dest: 'dist/'}]
      },
    },
    });

  grunt.registerTask('ack', function() {
    console.log('I am working fine!');
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');   // delete files or directories
  grunt.loadNpmTasks('grunt-contrib-concat');  // including the banner in js files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');  // code quality 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-text-replace');    //  ==> QSE template
  grunt.loadNpmTasks('grunt-contrib-cssmin');  //  minimize ccs
  
  // Default task.
  // grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);

  grunt.registerTask('src', [ 'replace:version',
                              'clean:src',
                              'copy:src']);

  grunt.registerTask('build', ['jshint:src', 
                               'clean:build', 
                               'concat:build', 
                               'copy:build', 
                               'uglify:build',
                               'replace:build']);
};