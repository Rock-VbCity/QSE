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
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false; } else { return true; }},
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
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false; } else { return true; }}
	};

	var myImagePadding = {
		ref: "myproperties.myImagePadding",
		label: "Image Padding",
		type: "boolean",
		component: "switch",
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false; } else { return true; }},
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
	// Extension Properties example
	// ****************************************************************************************    

	var	myText = {
		label:"This is a description for the properties panel (Text Component)",
		component: "text"
	};

	var	myFontSize = {
		type: "integer",
		expression: "none",
		label: "Font Size (Integer)",
		defaultValue: "10",
		ref: "myproperties.myFontSize"
	};

	var	myInputText = {
		type: "string",
		expression: "none",
		label: "String (Input Text)",
		defaultValue: "This is a test app to checkout custom properties",
		ref: "myproperties.myInputText"
	};

	var	myButton = {
		label:"My Button (Button Component)",
		component: "button",
		action: function(data){
			alert("My visualization extension name is '"+data.visualization+"' and have id '"+data.qInfo.qId+"'.");
		}
	};

	var	myPropertiesText = {
		label:"Select a button from the group below to change the text weight",
		component: "text"
	};

	var	myWeight = {
		type: "string",
		component: "buttongroup",
		label: "Font Weight (Button Group)",
		ref: "myproperties.myWeight",
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
	};

	var	myShow = {
		type: "boolean",
		label: "Show extra div? (boolean)",
		ref: "myproperties.myShow",
		defaultValue: false
	};

	var	myColorPicker = {
		label:"Background (Color-picker)",
		component: "color-picker",
		ref: "myproperties.myColorPicker",
		type: "integer",
		defaultValue: 0
	};

	var	myDropDown = {
		type: "string",
		component: "dropdown",
		label: "Select Options (dropdown)",
		ref: "myproperties.myDropDown",
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
	};

	var	mypropertiesTextLink = {
		label:"This is Custom link. We can use it for credits, git, website, point to articles etc.",
		component: "text"
	};

	var	mylink = {
		label:"http://help.qlik.com/en-US/sense-developer/3.2/Subsystems/APIs/Content/ExtensionAPI/property-definition-link.htm",
		component: "link",
		url:"http://help.qlik.com/en-US/sense-developer/3.2/Subsystems/APIs/Content/ExtensionAPI/property-definition-link.htm"
	};

	var	mySlider = {
		type: "number",
		component: "slider",
		label: "Letter Spacing (Slider)",
		ref: "myproperties.mySlider",
		min: 1,
		max: 10,
		step: 1,
		defaultValue: 1
	};

	var	myRangeSlider = {
		type: "array",
		component: "slider",
		label: "Range slider",
		ref: "myproperties.myRangeSlider",
		min: 1,
		max: 20,
		step: 1,
		defaultValue: [8, 17]
	};

	var	mySwitch = {
		type: "boolean",
		component: "switch",
		label: "Show Border (Switch)",
		ref: "myproperties.mySwitch",
		options: [{
			value: true,
			label: "Show"
		}, {
			value: false,
			label: "Hide"
		}],
		defaultValue: false
	};

	var	myTextarea = {
		label:"Textarea",
		component: "textarea",
		rows: 7,//the amount of rows in the textarea component (default is 3)
		maxlength: 100,//will not allow more than 100 characters
		ref: "myproperties.myTextarea",
		defaultValue: "This can be your fottnote/legend to your visualizations"
	};

	var	mypropertiesTextArray = {
		label: "This is Custom List. Add list items and view their labels and text. Click Add Item to start creating the Dynamic Array",
		component: "text"
	};

	var	myMyList = {
		type: "array",
		ref: "myproperties.myListItems",
		label: "List Items",
		itemTitleRef: "label",
		allowAdd: true,
		allowRemove: true,
		allowMove: true,
		addTranslation: "Add Item",
		items: {
			label: {
				type: "string",
				ref: "myproperties.myListLabel",
				label: "Label",
				expression: "none"
			},
			textarea: {
				label:"My textarea",
				component: "textarea",
				maxlength: 100,//you shouldn't write too much
				ref: "myproperties.myListTextarea"
			}
		}
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
			},
			myNewHeader2: {
				type: "items",
				label: "Text Compoents",
				items: {
					myText: myText,
					myFontSize: myFontSize,
					myInputText: myInputText,
					myButton: myButton
				}
			},
			myNewHeader3: {
				type: "items",
				label: "Some Text Attributes",
				items: {
					myPropertiesText: myPropertiesText,
					myWeight: myWeight,
					myShow: myShow,
					myColorPicker: myColorPicker,
					myDropDown: myDropDown
				}
			},
			myNewHeader4: {
				type: "items",
				label: "Some Selectors",
				items: {
					mypropertiesTextLink: mypropertiesTextLink,
					mylink: mylink,
					mySlider: mySlider,
					myRangeSlider: myRangeSlider,
					mySwitch: mySwitch
				}
			},
			myNewHeader5: {
				type: "items",
				label: "Various",
				items: {
					myTextarea: myTextarea,
					mypropertiesTextArray: mypropertiesTextArray,
					myMyList: myMyList
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
/*
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
---


							}
						}
					}
				}
			}
		},
*/		