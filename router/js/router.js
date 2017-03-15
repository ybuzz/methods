app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', 'nav');
    var a = '/nav';//可以使用变量来作为模板地址
                    // url路径，如有需要添加参数可使用字符串拼接
    var nav = 'nav.html';
    $stateProvider
        .state('nav', {                 //状态名字
            url: a,                     //url路径
            templateUrl: nav,           //嵌套模板
            controller:'nav as vm'      //定义controller
        })
        .state('nav.1',{
            url:'/1',
            templateUrl:'tem/1.html'
        })
        .state('nav.2',{
            url:'/2',
            templateUrl:'tem/2.html'
        })
        .state('nav.3',{
            url:'/3',
            templateUrl:'tem/3.html'
        })
        .state('nav.3.3',{
            url:'/3',
            templateUrl:'tem/3.html'
        })
});