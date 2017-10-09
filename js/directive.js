/**
 * Created by Administrator on 2017/10/9.
 */
(function(){
    angular.module('app.directive' ,[])
        .directive('headerMain' ,function(){
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: 'template/headerMain.html',
                scope: {
                    title: '@'
                }
            };
        })

        .directive('headerSearch' ,function(){
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: '',
                scope: {

                }
            };
        })

        .directive('footerMain' ,function(){
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: 'template/footerMain.html',
                scope: {
                    index: '@'
                }
            };
        })

        .directive('bookRecommend' ,function(){
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: 'template/bookRecommend.html',
                scope: {
                    title: '@',
                    lists: '='
                },
                controller: function($scope ,$location){
                    $scope.toBookInfo = function(){
                        $location.path('/bookInfo');
                    };
                }
            };
        });
})();