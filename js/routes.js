(function(mifosX) {
  var defineRoutes = function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'html/start.html'
      })
      .when('/login', {
        templateUrl: 'html/login.html'
      })
      .when('/home', {
        templateUrl: 'html/home.html'
      });

    $locationProvider.html5Mode(false);
  };
  mifosX.ng.application.config(defineRoutes).run(function($log) {
    $log.info("Routes definition completed");
  });
}(mifosX || {}));
