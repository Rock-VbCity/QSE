/*
 * grunt-init-gruntfile
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic Gruntfile.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template builds a QlikSense\'s Extension folder with a ' +
  'default set of properties; you should answer all the questions related to ' +
  'the extension\'s qext file. Additionally, the Extension\'s folder includes ' +
  'a Gruntfile.js that you will most likely need to customize for your extension' +
  'needs. _If you run grunt after generating the Gruntfile, and it exits with ' +
  'errors, edit the file!_.                         ';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    // QlikSense /////////////////////////////////////////////////////////////////////////

    // QS qext fields
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('type'    , 'visualization'),
    init.prompt('version' , '1.0.0'),
    init.prompt('icon'    , 'extension'),
    init.prompt('author_name'),
    init.prompt('homepage'),
    init.prompt('keywords', 'qlik-sense, visualization'),
    init.prompt('license' , 'MIT'),
    init.prompt('repository'),
    init.prompt('author_email'),
    init.prompt('author_url') 
      
  ], function(err, props) {
    props.dom = /y/i.test(props.dom);
    props.min_concat = /y/i.test(props.min_concat);
    props.package_json = /y/i.test(props.package_json);
    props.test_task = props.dom ? 'qunit' : 'nodeunit';
    props.file_name = props.package_json ? '<%= pkg.name %>' : 'FILE_NAME';

    // Find the first `preferred` item existing in `arr`.
    function prefer(arr, preferred) {
      for (var i = 0; i < preferred.length; i++) {
        if (arr.indexOf(preferred[i]) !== -1) {
          return preferred[i];
        }
      }
      return preferred[0];
    }

    // Guess at some directories, if they exist.
    var dirs = grunt.file.expand({filter: 'isDirectory'}, '*').map(function(d) { return d.slice(0, -1); });
    props.lib_dir = prefer(dirs, ['lib', 'src']);
    props.test_dir = prefer(dirs, ['test', 'tests', 'unit', 'spec']);

    // Maybe this should be extended to support more libraries. Patches welcome!
    props.jquery = grunt.file.expand({filter: 'isFile'}, '**/jquery*.js').length > 0;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    //  - it works with the rename.json file, allowing us to introduce
    //    renaming rules.

    init.copyAndProcess(files, props, {noProcess: '**/*.png'});

    // If is package_json true, generate package.json
    props.package_json = 'Y';
    if (props.package_json) {
      var devDependencies = {
        'grunt': "^1.1.0",
        'grunt-contrib-clean': '^2.0.0',
        'grunt-contrib-concat': '^1.0.1',
        'grunt-contrib-copy': '^1.0.0',
        'grunt-contrib-jshint': '^2.1.0',
        'grunt-contrib-nodeunit': '^2.1.0',
        'grunt-contrib-qunit': '^4.0.0',
        'grunt-contrib-uglify': '^4.0.1',
        'grunt-contrib-watch': '^1.1.0'
      };
/*
      if (props.dom) {
        devDependencies['grunt-contrib-qunit'] = '~0.5.2';
      } else {
        devDependencies['grunt-contrib-nodeunit'] = '~0.4.1';
      }

      if (props.min_concat) {
        devDependencies['grunt-contrib-concat'] = '~0.4.0';
        devDependencies['grunt-contrib-uglify'] = '~0.5.0';
      }
*/
      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', {
        name: props.name,
        version: '1.0.0',
        description: props.description,
        main: props.name + '.js',
        author: props.author_name,
        license: props.license,
        node_version: '>= 0.10.0',
        devDependencies: devDependencies
      });
    }

    // QlikSense /////////////////////////////////////////////////////////////////////////

    // extension.qext file

    var QSDependencies = {
      "dependencies" : { "qlik-sense" : ">=3.0.x" }
    };

    var QSExt = {
      'name'         : props.name,
      'description'  : props.description + '; version ' + props.version,
      'type'         : props.type,
      'version'      : props.version,
      'icon'         : props.icon,
      'author'       : props.author_name,
      'homepage'     : props.homepage,
      'keywords'     : props.keywords,
      'license'      : props.license,
      'repository'   : props.repository,
      'preview'      : props.name + '.png',
      "dependencies" : { "qlik-sense" : ">=3.0.x" }
    };

    grunt.file.write(props.name + '.qext', JSON.stringify(QSExt, null, '\t'));
   
    // generating wbfolder.wbl file
    var fs      = require('fs');
    for (const [key, value] of Object.entries(files)) {
      fs.appendFileSync('wbfolder.wbl', key + ';\n');
    }
    // fs.appendFileSync('wbfolder.wbl', 'wbfolder.wbl;\n');
    fs = undefined;

    console.log('\n\nExtension ' + props.name + ' environment ready!');

    // All done!
    done();
  });

};
