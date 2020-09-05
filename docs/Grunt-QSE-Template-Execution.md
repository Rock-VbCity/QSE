# <img src="images/qs-logo-01.png" width="60px"><img src="images/grunt-03.png" width="60px"> QSE Grunt Template execution

This section explains how to use the **QSE Grunt Template** with a simple example, let's create the simpliest *QlikSense Extension* possible, which is the *Extension* that the **Grunt's QSE scaffolding** creates by default.

<img src="images/grunt-scaffolding.png" width="400px">

## Our Environment

We could be working with:<ul>
<li>QlikSense Desktop
<li>QlikSense Cloud
<li>QlikSense Enterprise</ul>

Our procedure is based on the *QlikSense Environment*

## Requirements

These are the tools you may need:<ul>
<li>The **QSE Grunt Template** installed and tested.
<li>Your favourite editor, it could be:<ol>
<li> <a href="https://en.wikipedia.org/wiki/Sublime">Sublime</a>.
<li><a href="https://en.wikipedia.org/wiki/Visual_Studio_Code">Visual Studio Code</a> also known as **VSCode**.
<li>QlikSense Desktop's **Dev Hub**.</ol>
<li>Your favourite Markdown editor (<a href="http://markdownpad.com/">MarkdownPad 2</a>); if you want to write the *Extension* Readme.Md file.
<li><a href="https://en.wikipedia.org/wiki/GitHub">GitHub</a>; if you want to add your *Extension* to a repository.
</ul>

## Procedure
<ol>
<li>We are creating the **GruntExtension** on a Windows 10 workstation, and QlikSense Desktop.
<li>Open a command prompt session, and navigate to the QlikSense's extension folder:<pre>cd C:\Users\&lt;user_account>\Documents\Qlik\Sense\Extensions</pre>
<li>Create the GruntExtension folder <pre>mkdir GruntExtension:</pre>
<li>Navigate to the new folder:<pre> cd GruntExtension</pre>
<li>Type the command <pre>grunt-init QSE</pre>
This command creates our extension environment for us; it ask several questions that we should answer, these questions are:
<table style="border: 1px solid black; border-collapse: collapse; text-align: left;" width="100%">
  <tr style="background-color: #e5e8e8; font: 13px Tahoma;">
	<th>Prompt</th>
	<th>Description</th>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Project Name</td>
	<td>This is the name of our Extension.<br>It is also the name of the folder containing its code.<br>Press ENTER accepting the default value.<br>Example: <b>GruntExtension</b><br>
    <span style="color: red;">Mandatory</span></td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Description</td>
	<td>Write a brief text describing your extension.<br>Example: <b>grunt-init QSE test</b></td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>type</td>
	<td>Should always be <span style="font: 12px Courier;">"visualization"</span><br>Example: <b>visualization</b><br>
	<span style="color: red;">Mandatory</span></td>
    </td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Version</td>
	<td>Defines your individual version handling of the extension.<br>This setting is manually defined.<br>We suggest a <i>Semantic Versioning</i> of Major.Minor.Patch.<br>
	Example: 1.0.0
	</td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>icon</td>
	<td>Icon displayed in the library.<br>
	Default value: <span style="font: 12px Courier;">"extension"</span><br>Check the <b>Qext file overview</b> for more information.<br>Example: <b>extension</b>
	</td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Author name</td>
	<td>It defaults to your name.<br>It is the name of the extension author.<br>grunt-init figures your name out from the environment.<br>Example: <b>Arnaldo Sandoval</b>
	</td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Project homepage</td>
	<td>This is the Extension's repository home page.<br>It could be at GitHub, or at Qlik Branch.<br>
	Example: <b>https://github.com/Rock-VbCity/GruntExtension</b></td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>keywords</td>
	<td>Optional.<br>Defines the keywords for the mashup.<br>Qlik documentation does not elaboate on how these keywords are referenced.<br>Example: <b>qlik-sense, visualization</b>
	</td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>license</td>
	<td>Optional.<br>Defines the license that applies to the mashup.<br>Grunt documentation includes this note:<br>&nbsp;&nbsp;&nbsp;&nbsp;The license(s) for the project.<br>&nbsp;&nbsp;&nbsp;&nbsp;Multiple licenses are separated by spaces.<br>&nbsp;&nbsp;&nbsp;&nbsp;The licenses built-in are: MIT, MPL-2.0, GPL-2.0, and Apache-2.0.<br>&nbsp;&nbsp;&nbsp;&nbsp;Defaults to MIT.<br>Example: <b>MIT</b></td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Project git repository</td>
	<td>Optional.<br>Define information about the repository.<br>The default value may need amendments when your workstation's user account is not the same you are using at GitHub.<br>Example: <b>git://github.com/Rock-VbCity/GruntExtension.git</b></td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Author email</td>
	<td>Qlik documentation does not suggest including this field.<br>Grunt init does in order to have your GitHub properly documented.<br>Grunt-init defaults your email address from your workstation environment.<br><b>Example: <b>mail_account@hotmail.com</td>
  </tr>
  <tr style="font: 13px Arial; vertical-align: text-top;">
	<td>Author url</td>
	<td>You could include your own page's url in this field.<br>Qlik does not expect the field.<br>Grunt does not explain this field further.<br>Example:</td>
  </tr>
</table>
<span style="color: #008000;">Finally, it prompts you: Do you want to make any changes to the above before continuing?</span> (y/N)<br>The following output appears in your command session:
<img src="images/grunt-init-QSE-output.png" width="500px">
