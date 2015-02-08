define([
    'angular',
    'controllers',
], function (angular, controllers) {

    return controllers
        .controller('NavigationController', [
            '$scope', 'NavigationGroup', function NavigationController (
                $scope, NavigationGroup
            ) {
                $scope.groups = NavigationGroup.query()
        }])
})
