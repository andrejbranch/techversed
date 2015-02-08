require.config({
    paths: {
        "angular": '../../components/angular/angular',
        "angularRoute": '../../components/angular-route/angular-route',
        "angularMocks": '../../components/angular-mocks/angular-mocks',
        "angularResource": '../../components/angular-resource/angular-resource',
        "angularUIRouter": '../../components/angular-ui-router/release/angular-ui-router',
        "angularAnimate": '../../components/angular-animate/angular-animate',
        "angularSanitize": '../../components/angular-sanitize/angular-sanitize',
        "text": '../../components/requirejs-text/text',
        "uiBootstrapModal": '../../components/angular-ui-bootstrap/src/modal/modal',
        "uiBootstrapTypeAhead": '../../components/angular-ui-bootstrap/src/typeahead/typeahead',
        "uiPosition": '../../components/angular-ui-bootstrap/src/position/position',
        "uiBindHtml": '../../components/angular-ui-bootstrap/src/bindHtml/bindHtml',
        "uiBootstrapDatePicker": '../../components/angular-ui-bootstrap/src/datepicker/datepicker',
        "uiBootstrapProgressBar": '../../components/angular-ui-bootstrap/src/progressbar/progressbar',
        "uiBootstrapTransition": '../../components/angular-ui-bootstrap/src/transition/transition',
        "utStrings": 'strings',
        "uiBootstrapPopover": '../../components/angular-ui-bootstrap/src/popover/popover',
        "uiBootstrapTooltip": '../../components/angular-ui-bootstrap/src/tooltip/tooltip',
        "utiltiesNgTemplates": '../../js/templates',
        "app": 'app'
    },
    baseUrl: 'app/js',
    shim: {
        "angular": {
            exports: 'angular'
        },
        "angularRoute": {
            deps: ['angular']
        },
        "angularResource": {
            deps: ['angular']
        },
        "angularUIRouter": {
            deps: ['angular']
        },
        "angularMocks": {
            deps:['angular']
        },
        "angularAnimate": {
            deps: ['angular']
        },
        "angularSanitize": {
            deps: ['angular']
        },
        "uiBootstrapModal": {
            deps: ['angular']
        },
        "uiBootstrapTypeAhead": {
            deps: ['angular']
        },
        "uiPosition": {
            deps: ['angular']
        },
        "uiBindHtml": {
            deps: ['angular']
        },
        "uiBootstrapDatePicker": {
            deps: ['angular']
        },
        "uiBootstrapPopover": {
            deps: ['angular', 'uiBootstrapTooltip']
        },
        "uiBootstrapTooltip": {
            deps: ['angular']
        },
        "uiBootstrapProgressBar": {
            deps: ['angular', 'uiBootstrapTransition']
        },
        "uiBootstrapTransition": {
            deps: ['angular']
        },
        "utPage": {
            deps: ['angular', 'services']
        },
        "app" : {
            deps: ['angular']
        },
        "utiltiesNgTemplates" : {
            deps: ["app"]
        }
    }
});

require( [
    'angular',
    'app',
    'utiltiesNgTemplates'
], function(angular, app) {

    angular.element().ready(function() {
        // bootstrap
        html = angular.element(document.getElementsByTagName('html')[0])
        html.addClass('ng-app')
        angular.bootstrap(html, [app['name']])
    });

});
