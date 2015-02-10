define([
    'angular',
    'directives'
], function (angular, directives) {
    return directives
        .directive('navigationGroup', function () {
            return {
                restrict: 'A',
                link: function ($scope, element, attrs) {
                    element.on('hover', function () {
                        console.log(1)
                    })
                },
                scope: {
                }
            }
        })
})
