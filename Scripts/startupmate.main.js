(function () {
   
    requirejs.config({
        
        baseUrl: applicationpath + "Scripts",
        urlArgs: "bust=" + (new Date()).getTime(),
        waitSeconds: 60,
        paths: {
            jquery: 'jquery-2.1.4.min',
            bootstrapMultiSelect: 'bootstrap-multiselect',
            bootstrapTreeView: 'bootstrap-treeview',
            bootstrap: 'bootstrap',
            i18next: 'i18next-1.8.0.min',
            jquerySticky: 'jquery.sticky',
            typed: 'typed',
            jquerymixitup: 'jquery.mixitup',
            jquerycountto: 'jquery.countTo',
            jquerywaypoints: 'jquery.waypoints.min',
            jqueryquovolver: 'jquery.quovolver',

        },
        shim: {
            jquery: {
                exports:'jquery'
            },
            bootstrap: {
                deps: ['jquery'],
                exports: 'bootstrap'
            },
            bootstrapTreeView: {
                deps: ['jquery'],
                exports: 'bootstrapTreeView'
            },
            bootstrapMultiSelect: {
                deps: ['jquery'],
                exports: 'bootstrapMultiSelect'
            },
            i18next: {
                deps: ['jquery'],
                exports: 'i18next'
            },
            jquerySticky: {
                deps: ['jquery'],
                exports: 'jquerySticky'
            },
            typed: {
                deps: ['jquery'],
                exports: 'typed'
            },
            jquerymixitup: {
                deps: ['jquery'],
                exports: 'jquerymixitup'
            },
            jquerycountto: {
                deps: ['jquery'],
                exports: 'jquerycountto'
            },
            jquerywaypoints: {
                deps: ['jquery'],
                exports: 'jquerywaypoints'
            },
            jqueryquovolver: {
                deps: ['jquery'],
                exports: 'jqueryquovolver'
            },

        }
    });

    requirejs.onError = function (err) {
        debugger;
        if (err.requireType === 'timeout' || err.requireType === 'scripterror' || err.requireType === 'noefine' || err.requireType === 'notloaded') {
            window.location.reload()
        }
        else {
            throw err;
        }

    }



})()