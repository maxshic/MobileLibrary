/**
 * Created by Administrator on 2017/10/9.
 */
(function(){
    angular.module('app' ,['ngRoute' , 'app.controller' ,'app.directive'])
        .config(['$routeProvider' ,function($routeProvider){
            $routeProvider
                .when('/' ,{
                    templateUrl: 'view/home.html',
                    controller: 'homeController'
                })

                .when('/list' ,{
                    templateUrl: 'view/lists.html',
                    controller: 'listsController'
                })

                .when('/discover' ,{
                    templateUrl: 'view/discover.html',
                    controller: 'discoverController'
                })

                .when('/mine' ,{
                    templateUrl: 'view/mine.html',
                    controller: 'mineController'
                })

                .when('/bookInfo' ,{
                    templateUrl: 'view/bookInfo.html',
                    controller: 'bookInfoController'
                })

                .when('/login' ,{
                    templateUrl: 'view/login.html',
                    controller: 'loginController'
                })

                .when('/search' ,{
                    templateUrl: 'view/searchPage.html',
                    controller: 'searchController'
                })

                .when('/bookLists' ,{
                    templateUrl: 'view/bookLists.html',
                    controller: 'bookListsController'
                })

                .when('/bookCase' ,{
                    templateUrl: 'view/bookCase.html',
                    controller: 'bookCaseController'
                });
        }]);
})();