define(['angular', 'services'], function (angular, services) {
    return services
        .factory('NavigationGroup', ['$resource', function($resource) {
            return $resource('/api/v1/navigation-group/:id')
        }])
})
