sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";
	console.log("<<<<<<<<<<<<<<<------------------------- BB 1---------------------------------->>>>>>>>>>>>>>: bbsapui5fiori index.js");

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});