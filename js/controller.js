/**
 * Created by Administrator on 2017/10/9.
 */
(function(){
    angular.module('app.controller' ,[])
        .controller('homeController' ,function($scope){
            $scope.title = '首页';
        })

        .controller('listsController' ,function($scope){
            $scope.title = '列表';
        })

        .controller('discoverController' ,function($scope){
            $scope.title = '发现';
        })

        .controller('mineController' ,function($scope){
            $scope.title = '我的';
        })

        .controller('bookInfoController' ,function($scope){
            $scope.title = '详情';
        });

})();