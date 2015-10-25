/*this file is used for the purpose of initialization*/
//ananymous self executing function
(function () {
    requirejs.config({
        baseUrl: applicationpath + "Scripts",
        urlArgs: "bust=" + (new Date()).getTime(),
        waitSeconds: 60,
        paths: {
            _ref: '_references',
            bootstrap: 'bootstrap.min',
            jquery: 'jquery-1.10.2.min',
            jqueryCountTo: 'jquery.countTo',
            jqueryEasings: 'jquery.easing.min',
            jqueryMixitUp: 'jquery.mixitup.min',
            jqueryQuovolver: 'jquery.quovolver',
            jquerySticky: 'jquery.sticky',
            jqueryWaypoints: 'jquery.waypoints.min',
            typed: 'typed',
            i18next: 'i18next-1.8.0.min',
            jqueryUI: 'jquery-ui-1.10.4.min',
        },
        shim: {
            _ref: { deps: ["jquery"] },
            bootstrap: {
                deps: ["jqueryUI"],
                exports: 'bootstrap',
            },
            jqueryCountTo: {
                deps: ["jquery"],
                exports: 'jqueryCountTo',
            },
            jqueryEasings: {
                deps: ["jquery"],
                exports: 'jqueryEasings',
            },
            jqueryMixitUp: {
                deps: ["jquery"],
                exports: 'jqueryMixitUp',
            },
            jqueryQuovolver: {
                deps: ["jquery"],
                exports: 'jqueryQuovolver',
            },
            jquerySticky: {
                deps: ["jquery"],
                exports: 'jquerySticky',
            },
            jqueryWaypoints: {
                deps: ["jquery"],
                exports: 'jqueryWaypoints',
            },
            typed: {
                deps: ["jquery"],
                exports: 'typed',
            },
            i18next: { exports: 'typed', },
            jqueryUI: {
                deps: ["jquery"],
                exports: 'jqueryUI',
            },
        }
    });
    requirejs.onError = function (err) {
        //console.log(err.requireType);
        //console.log('modules: ' + err.requireModules);

        //err.requireType === 'timeout' meant when require requirejs not able to load a module within WaitSeconds
        //err.requireType === 'scripterror' meant when server responses with "Failed to load resource: the server responded with a status of 404 (NOT FOUND) "
        //err.requireType === 'nodefine' check http://requirejs.org/docs/errors.html#nodefine
        //err.requireType==='notloaded' check http://requirejs.org/docs/errors.html#notloaded
        if (err.requireType === 'timeout' || err.requireType === 'scripterror' || err.requireType === 'nodefine' || err.requireType === 'notloaded') {
            window.location.reload()
        }
        else {
            throw err;
        }
    };
})();