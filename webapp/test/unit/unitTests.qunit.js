/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ODATA/ODATA_DEMO/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});