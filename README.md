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

## Scaffolding Execution

Now that we installed the QlikSense's <b>QSE Grunt Template</b> let's build our first <b>GruntTemplate</b> by executing the <b>grunt-init</b> command; follow the instructions found at this document [Grunt QSE Template Execution](docs/Grunt-QSE-Template-Execution.md)

## Extension Properties

The following document [Grunt QSE Properties](docs/Grunt-QSE-Properties.md) explains the initial properties pre-defined by the *Grunt QSE Template*

## Visualization Extension Code

The *Visualization Extension* code is located in the file **&lt;Extension_Name>.js**

There are two approaches to implement *Visualization Extensions*:
* The *Paint* method rendering the *Extension* content.
* Using AngularJS in *Visualization Extensions*.

This *Extension* is based in the former method, it uses the *Paint* method to render its content.