# Grunt QSE Template (QS Visualization Extension)

This is a **Grunt-Init Template** that creates a QlikSense Visualization Extension with several features, including a companion *Gruntfile.js* giving you some tasks to manage your extension's build process and storing it at your **GitHub** repository.

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

## Grunt Scaffolding Execution

Now that we installed the QlikSense's <b>QSE Grunt Template</b> let's build our first  <i>QlikSense Visualization Extension</i> by executing the <b>grunt-init</b> command; Let's follow the instructions found at this document [Grunt QSE Template Execution](docs/Grunt-QSE-Template-Execution.md).

## Visualization Extension Properties

The **Grunt Scaffolding** install a *QlikSense Visualization Extension*, with several pre-defined properties; we basically coded into the template several of the Visualization Extensions found in the Qlik Community and Qlik Help.
  
The following document [Grunt QSE Properties](docs/Grunt-QSE-Properties.md) explains them.

We consider it will be easier for you to amend these properties to your needs, and remove or comment out those that you do not need.

## Visualization Extension Code

The *Visualization Extension* code is located in the file **&lt;Extension_Name>.js**

There are two approaches to implement *Visualization Extensions:
<ul>
<li> The <i>Paint</i> method rendering the <i>Visualization Extension</i> content.
<li> Using AngularJS in <i>Visualization Extensions</i>.
</ul>
This *Visualization Extension* is based in the former method, it uses the *Paint* method to render its content.

## Grunt Tasks

The **QSE Grunt Template for QlikSense** includes some pre-define Grunt tasks that could assist your development workflow by automating these tasks:

* **src** source folder updates.
* Updates the version number in your *json*, *qext* and *about* property.
* It generates the **dist** folder containing 3 distribution files:
	* &lt;extension_name>.zip
	* &lt;extension_name>-min.zip
	* &lt;extension_name>-mix.zip

Please read this document explaining them [Grunt QSE Pre-Defined Tasks](Grunt-QSE-PreDefined-Tasks.md).