/// <reference path="../Scripts/angular-1.1.4.js" />

var app = angular.module("memberStatesApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/memberStates", {
      controller: "MemberStatesController",
      templateUrl: "/app/partials/memberStates.html",
    })
    .otherwise({ redirectTo: "/memberStates" });
});
