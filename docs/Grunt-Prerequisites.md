# <img src="images/grunt-03.png" width="60px"> Grunt prerequisites
Grunt is a popular *JavaScript Task Runner* which is included with the *QlikSense Extension Template*; its function is to build and rebuild the extension based on the supplied Gruntfile. The Qlik Extension itself is part of the scaffolding features Grunt make available for us.

We also included some Grunt tasks you may want to use when building your QlikSense extension, specially when preparing its code for distribution in GitHub.

# Getting started

These are the modules required by Grunt:
<ul>
<li><a href="https://nodejs.org/en/" target="_blank">nodejs</a>; Node install the Node Package Manager: <b>npm</b>
<li><a href="https://gruntjs.com/getting-started" target="_blank">grunt-cli</a>; this link contains the grunt getting started guide, which install the <b>Grunt</b> Command Line Intepreter. 
<li><a href="https://gruntjs.com/project-scaffolding" target="_blank">grunt-init</a>; this is the grunt's projects scalfolding module; It will install a QlikSense Extension with some predefined properties.
</ul>

# Environment
### Hardware
We used Windows 10 hosted by an Oracle VM Virtual Box with the following configuration:

* Windows 10 Pro N 64-bit operating system, x64-based processor.
* Version 2004
* OS build 19041.388
* Installed RAM: 10.0 Gb
* Processor: Intel (R) Core(TM) i7-855U CPU @ 1.80 GHz 1.99 GHZ
* HDD 250 GB
### Software

* GitHub Desktop
* Notepad++
* Markdown2 
* QlikSense Desktop June 2020 Path 2 Update 1

### Account
* We need an account with administrator privileges (or the ability to download and install software)
* Access to the Windows command line (search > cmd > right-click > run as administrator) OR Windows PowerShell (Search > Powershell > right-click > run as administrator)

### Comments

* Standard folder setup:

<span style="font-family: 'courier new'">
        C:\users\<login-account>\Documents<br>
        C:\users\<login-account>\Documents\Qlik\Sense
</span>

### GitHub

We do not need GitHub installed for Grunt to work but one of the benefits of installing this Grunt based QSE Template is to enable deploying your QlikSense extension into your GitHub repositories. 