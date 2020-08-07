# <img src="images/grunt-03.png" width="60px"> Grunt installation

As the [Grunt Prerequisites](docs/Grunt-Prerequisites.md) explained, we have to install the following components:

* [Installing node.js](#installing-node-js)

* [node.js](https://nodejs.org/en/ "nodejs")
<li> [grunt-cli](https://gruntjs.com/getting-started)
<li> [grunt-init](https://gruntjs.com/project-scaffolding)
</ul>



### Installing [node.js](https://nodejs.org/en/ "nodejs")

There is a plethora of tutorials documenting **node.js** installation, these are two of them:

* [How To Install Node.Js And NPM On Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
* [nodejs.org Downloads and Installation](https://nodejs.org/en/download/)

Either one will do, we followed the directions from the Phoenixnap web site.

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

#installing-node-js