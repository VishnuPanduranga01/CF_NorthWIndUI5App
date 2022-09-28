sap.ui.define(
    ["./BaseController",
        "sap/ui/model/odata/v2/ODataModel"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel) {
        "use strict";

        return Controller.extend("com.myorg.myUI5App.controller.MainView", {
            onInit: function () {
                //const oDatamodel = new ODataModel("/v2/northwind/northwind.svc/");
               // this.getView().setModel(oDatamodel, "oDataModel");
            },
        });
    }
);
