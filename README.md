# QSE Grunt Template for QlikSense

This is a **Grunt-Init Template** that creates a QlikSense Extension with several features, including a companion *Gruntfile.js* implementing some tasks to manage your extension's build process and storing it at your **GitHub** repository.

## Prerequisites

* node.js
* grunt-cli
* grunt-init
* QSE; the grunt-init scaffolding folder

This link [Grunt Prerequisites](docs/Grunt-Prerequisites.md) explains with more details, what is required to install **Grunt** in your Windows machine.

## Installation

We split the installation procedure in two separated documents:

* [Grunt Installation](docs/Grunt-Installation.md) explains the installation of the components required by **Grunt** and the **QSE Grunt Template**.
* [Grunt QSE Template Installation](docs/Grunt-QSE-Template-Installation.md) explains installing the QSE Template in your Windows workstation.


If you haven't already done so, install [grunt-init](http://gruntjs.com/project-scaffolding "grunt-init").

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:
```
git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/QSE
```
## Usage
<ol>
<li> Create the directory for your extension at:<br><br>
<code>
C:\Users\<user-login>\Documents\Qlik\Sense\Extensions\<Extension_Name>
</code></li><br>

<li> Open a CMD (old faithful DOS) session and navigate to the extension's folder (you can create its folder using DOS as well)
```
cd C:\Users\<user-login>\Documents\Qlik\Sense\Extensions\<Extension_Name>
```
**2b.** or, if you want to create the extesion's folder with DOS
```
cd C:\Users\<user-login>\Documents\Qlik\Sense\Extensions
mkdir <Extension_Name>
cd <Extension_Name>
```
**3.** Type the command:
```
grunt-init QSE
```
_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
</ol>