define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Custom components
	// ****************************************************************************************

	var showTitles = {
		ref: "showTitles",
		label: "Show Titles",
		defaultValue: false,
		show: false
	};

	var myResetCanvas = {
		ref: "myproperties.myResetCanvas",
		label: "Reset Canvas to Image Size",
		type: "boolean",
		component: "switch",
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false } else { return true }},
		defaultValue: false,
		options: [
			{ 
				value: true,
				label: "Yes"
			}, {
				value: false,
				label: "No"
			}
		]
	};

	var myImage = {
		ref: "myproperties.myImage",
		label: "Image Object",
		component: "media",
		layoutRef: "myproperties.myImage",
		type: "string",
		defaultValue: ""
	};

	var myImageAlignment = {
		ref: "myproperties.myImageAlignment",
		label: "Image Alignment",
		type: "string",
		component: "align-matrix",
		defaultValue: "centerCenter",
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false } else { return true }}
	};

	var myImagePadding = {
		ref: "myproperties.myImagePadding",
		label: "Image Padding",
		type: "boolean",
		component: "switch",
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false } else { return true }},
		defaultValue: false,
		options: [
			{ 
				value: true,
				label: "Yes"
			}, {
				value: false,
				label: "No"
			}
		]
	};

	// ****************************************************************************************
	// Sections definitions
	// ****************************************************************************************

	var myCustomSection = {
		//type: "items", //<== not necessary to define "items"
		component: "expandable-items",
		label: "My Accordion Section",
		items: {
			myNewHeader: {
				type: "items",
				label: "Image Attributes",
				items: {
					showTitles: showTitles,
					myImage: myImage,
					myImageAlignment: myImageAlignment,
					myImagePadding: myImagePadding
				}
			}
			
		}
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Return overall definition of the property accordion
	return {
		type: "items",
		component: "accordion",
		items: {
			// appearance: appearanceSection,
			customSection: myCustomSection
		}
	};

} );

/////////////////////////////////////////////////////////////////////////
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 1,
					max: 1
				},
				measures: {
					uses: "measures",
					min: 1,
					max: 1
				},
				sorting: {
					uses: "sorting"
				},
				settings : {
					uses : "settings",
					items: {
						custom: {
							type: "items",
							label: "Custom Properties",
							items: {
								text: {
									label:"This is a description for the properties panel (Text Component)",
									component: "text"
								},
								fontSize: {
									type: "integer",
									expression: "none",
									label: "Font Size (Integer)",
									defaultValue: "10",
									ref: "vars.fontSize"
								},
								inputText: {
									type: "string",
									expression: "none",
									label: "String (Input Text)",
									defaultValue: "This is a test app to checkout custom properties",
									ref: "vars.inputText"
								},
								button: {
									label:"My Button (Button Component)",
									component: "button",
									action: function(data){
										alert("My visualization extension name is '"+data.visualization+"' and have id '"+data.qInfo.qId+"'.");
									}
								},
								propertiesText: {
									label:"Select a button from the group below to change the text weight",
									component: "text"
								},
								weight: {
									type: "string",
									component: "buttongroup",
									label: "Font Weight (Button Group)",
									ref: "vars.weight",
									options: [{
										value: "bold",
										label: "Bold",
										tooltip: "Select for Bold text"
									}, {
										value: "normal",
										label: "Normal",
										tooltip: "Select for normal text"
									}],
									defaultValue: "normal"
								},								
								show: {
									type: "boolean",
									label: "Show extra div? (boolean)",
									ref: "vars.show",
									defaultValue: false
								},								
								colorPicker: {
									label:"Background (Color-picker)",
									component: "color-picker",
									ref: "vars.color",
									type: "integer",
									defaultValue: 0
								},
								dropDown: {
									type: "string",
									component: "dropdown",
									label: "Select Options (dropdown)",
									ref: "vars.dropDown",
									options: [{
										value: "option1",
										label: "Option 1",
										tooltip: "Select for Option 1"
									}, {
										value: "option2",
										label: "Option 2",
										tooltip: "Select for Option 2"
									}, {
										value: "option3",
										label: "Option 3",
										tooltip: "Select for Option 3"
									}],
									defaultValue: "option2"
								},
								propertiesTextLink: {
									label:"This is Custom link. We can use it for credits, git, website, point to articles etc.",
									component: "text"
								},
								link: {
									label:"http://help.qlik.com/en-US/sense-developer/3.2/Subsystems/APIs/Content/ExtensionAPI/property-definition-link.htm",
									component: "link",
									url:"http://help.qlik.com/en-US/sense-developer/3.2/Subsystems/APIs/Content/ExtensionAPI/property-definition-link.htm"
								},
								slider: {
									type: "number",
									component: "slider",
									label: "Letter Spacing (Slider)",
									ref: "vars.slider",
									min: 1,
									max: 10,
									step: 1,
									defaultValue: 1
								},								
								rangeSlider: {
									type: "array",
									component: "slider",
									label: "Range slider",
									ref: "vars.rangeSlider",
									min: 1,
									max: 20,
									step: 1,
									defaultValue: [8, 17]
								},
								switch: {
									type: "boolean",
									component: "switch",
									label: "Show Border (Switch)",
									ref: "vars.switch",
									options: [{
										value: true,
										label: "Show"
									}, {
										value: false,
										label: "Hide"
									}],
									defaultValue: false
								},
								textarea: {
									label:"Textarea",
									component: "textarea",
									rows: 7,//the amount of rows in the textarea component (default is 3)
									maxlength: 100,//will not allow more than 100 characters
									ref: "vars.textarea",
									defaultValue: "This can be your fottnote/legend to your visualizations"
								},
								propertiesTextArray: {
									label: "This is Custom List. Add list items and view their labels and text. Click Add Item to start creating the Dynamic Array",
									component: "text"
								},
								MyList: {
									type: "array",
									ref: "listItems",
									label: "List Items",
									itemTitleRef: "label",
									allowAdd: true,
									allowRemove: true,
									allowMove: true,
									addTranslation: "Add Item",
									items: {
										label: {
											type: "string",
											ref: "label",
											label: "Label",
											expression: "none"
										},
										textarea: {
											label:"My textarea",
											component: "textarea",
											maxlength: 100,//you shouldn't write too much
											ref: "myTextarea"
										}
									}
								}
							}
						}
					}
				}
			}
		},