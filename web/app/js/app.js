define([
    'angular',
    'angularRoute',
    'angularUIRouter',
    'angularAnimate',
    'angularSanitize',
    'uiBootstrapModal',
    'uiBootstrapTypeAhead',
    'uiPosition',
    'uiBindHtml',
    'uiBootstrapDatePicker',
    'uiBootstrapPopover',
    'uiBootstrapProgressBar',
    'uiBootstrapTransition',
    'services',
    'controllers',
    'directives',
    'filters',
], function (angular) {
    'use strict';

    var html, utilitiesApp

    utilitiesApp = angular.module('utilitiesApp', [
        'ngRoute',
        'utilitiesApp.services',
        'utilitiesApp.controllers',
        'utilitiesApp.directives',
        'utilitiesApp.filters',
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap.modal',
        'ui.bootstrap.typeahead',
        'ui.bootstrap.datepicker',
        'ui.bootstrap.popover',
        'ui.bootstrap.progressbar',
        'ui.bootstrap.transition'
    ]).value('$anchorScroll', angular.noop)

    return utilitiesApp
});
