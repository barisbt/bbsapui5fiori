sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("solutions.blackbelt.bbsapui5fiori.controller.App", {
      onShowHello : function () {
         // show a native JavaScript alert
         alert("Hello World");
      }
   });
});