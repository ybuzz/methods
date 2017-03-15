var app =angular.module("app", ['ui.router','ui.bootstrap','ngAnimate', 'ngSanitize'])
app.controller("tran",function ($scope,$timeout) {
    $scope.change=function () {
        $scope.id=true;
        $timeout(function () {
            $scope.id=false
        },500)

    }
})