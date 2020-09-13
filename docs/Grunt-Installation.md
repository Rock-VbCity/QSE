# <img src="images/grunt-03.png" width="60px"> Grunt installation

As the [Grunt Prerequisites](docs/Grunt-Prerequisites.md) explained, we have to install the following components:

* [Installing node.js](#installing-nodejs)
* [Installing grunt-cli](#installing-grunt-cli)
* [Installing grunt-init](#installing-grunt-init)

<b>Note</b>: You may Google on how to install Grunt on the Web, as we did when researching for the Extension, alternativaly, you may follow our notes.

### Installing [node.js](https://nodejs.org/en/ "nodejs")

There is a plethora of tutorials documenting **node.js** installation, these are two of them:

* [How To Install Node.Js And NPM On Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
* [nodejs.org Downloads and Installation](https://nodejs.org/en/download/)

Either one will do, we followed the directions from the Phoenixnap web site (The first link shown above).

##### Step 1 Download Node.js Installer

1. Download Node.js Installer

##### Step 2: Install Node.js and NPM from Browser

1. Once the installer finishes downloading, launch it. Open the downloads link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.

2. You will be welcomed to the Node.js Setup Wizard – click Next.

3. On the next screen, review the license agreement. Click Next if you agree to the terms and install the software.

4. The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click Next.

5. The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking Next.

6. Automaticall install necessary tools. Note that this will install Chocolatey. **We left this prompt unchecked**, as we do not need this tools, if you consider you need it then check the box; accept the defaults by clicking on Next.
 
7. Finally, click the Install button to run the installer. When it finishes, click Finish. 

##### Step 3: Verify Installation

* Open a command prompt (or PowerShell), and enter the following:

  <pre>
  node –v</pre>

The system should display the **Node.js** version installed on your system; which was **v12.18.3** at the time of writing this document. 

* You can do the same for NPM:

<pre>
npm –v</pre>

The npm version was **6.14.6** at the time of writing.

##### Latest node.js version
We had installed the LTS (Long Term Stable) version, so there is not need to run any update command. 

### Installing [grunt-cli](https://gruntjs.com/getting-started)

Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager.

Because we are executing these procedures on Windows 10, you should start windows command prompt with **administrator** priviledges.

Before setting up Grunt ensure that your npm is up-to-date by running <pre>npm update -g npm</pre><br>(this might require a Windows command session with **administrator** priviledges).

##### Installing CLI

In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to run your command shell as Administrator, to do this.

<pre>npm install -g grunt-cli</pre>

After several messages appeared in the console, this will put the grunt command in your system path, allowing it to be run from any directory.

##### Verify installation

Type the following command in your Windows console session:

<pre>grunt -v</pre>

You should see the message:

<pre>grunt-cli: The grunt command line interface (v1.3.2)</pre>

You may also get this message

<pre>Fatal error: Unable to find local grunt.<br>
If you're seeing this message, grunt hasn't ben installed locally to
your project. For more information about installing and configuring grunt, 
please see the Getting Started guide:

https://gruntjs.com/getting-started</pre>

You do not need to worry, as we acomplish the local grunt installation when executing the **QSE Grunt Template**.

### Installing [grunt-init](https://gruntjs.com/project-scaffolding)

Grunt-init is a scaffolding tool used to automate project creation. It will build an entire directory structure based on current environment and answers to some questions. The exact files and contents created depend on the template chosen along with the answers to the questions asked.

##### Installation

In order to use grunt-init, you'll want to install it globally.

<pre>npm install -g grunt-init</pre>
This will update your system path with the location of the **grunt-init** command, allowing it to be run from anywhere.

**Notes:** You may need to use your command shell as Administrator to do this.

##### Post installation

The command **grunt-init** is ready available to build your project from a *TEMPLATE*; these *TEMPLATES* projects are located at the <span style="color:brown;">%USERPROFILE%\.grunt-init\</span> folder; the grunt-init installation does not create this folder for us; we should create it manually from the Windows command session (as administrator).

Notice the folder name starts with a dot, e.g. <span style="color:red; font-weight:bold;">.</span><span style="color:brown;">grunt-init</span>

We create the folder by executing these commands:
<pre>cd /users/<span style="color:brown; font-weight:bold;">&lt;user_account></span>
mkdir <span style="color:brown;">.grunt-init</span></pre>
Where:<br>
<ul>
<li><span style="color:brown;">&lt;user&#95;account></span> is your Windows login account, and <span style="color:brown;">/users/&lt;user_account></span> is your home directory.
<li><span style="font-weight:bold;">mkdir</span> command creates the folder
</ul>

### Summary

We installed the components required by **grunt** and **grunt-init**; and created the folder (**.grunt-init**) the will contain the scaffolding projects.

