/**
 * Created by Administrator on 2017/10/9.
 */
(function(){
    angular.module('app.controller' ,['common.service'])
        .controller('homeController' ,function($scope){
            $scope.title = '首页';
        })

        .controller('listsController' ,function($scope ,$location){
            $scope.title = '列表';

            $scope.toBookLists = function(){
                $location.path('/bookLists');
            };
        })

        .controller('discoverController' ,function($scope){
            $scope.title = '发现';
        })

        .controller('mineController' ,function($scope ,$location ,storeService){
            $scope.title = '我的';
            $scope.userName = '登录';
            $scope.isShow = false;

            if(storeService.getItem('user')){
                $scope.userName = storeService.getItem('user').name;
                $scope.isShow = true;
            }

            $scope.toLogin = function(){
                if(!storeService.getItem('user')){
                    $location.path('/login');
                }
            };
        })

        .controller('bookInfoController' ,function($scope , $location ,storeService){
            $scope.title = '详情';

            $scope.toBookCase = function(){
                if(storeService.getItem('user')){
                    $location.path('/bookCase');
                }else{
                    $location.path('/login');
                }
            };
        })

        .controller('loginController' ,function($scope , $location ,storeService){
            $scope.title = '登录';
            $scope.user = {
                name: '',
                pass: ''
            };

            $scope.login = function(){
                //console.log($scope.user);
                if($scope.user.name == 'admin' && $scope.user.pass == 'admin'){
                    //console.log('success');
                    storeService.setItem('user' ,$scope.user);
                    //$location.path('/mine');
                    history.back();
                }else{
                    $('.loginGroup>input').addClass('error');
                }
            };

            $('.loginGroup>input').focus(function(){
                $(this).removeClass('error');
                $(this).addClass('actived');
            });

            $('.loginGroup>input').blur(function(){
                $(this).removeClass('actived');
            });

            $('.btnLogin')[0].addEventListener('touchstart' ,function(){
                $('.btnLogin').css('background-color' , '#09B0DB');
                //console.log('123');
            } ,false);

            $('.btnLogin')[0].addEventListener('touchend' ,function(){
                $('.btnLogin').css('background-color' , '#00C1DE');
            } ,false);
        })

        .controller('searchController' ,function($scope){
            $scope.pageBack = function(){
                history.back();
            };

            $('.search').focus();
        })

        .controller('bookListsController' ,function($scope ,$location){
            $scope.title = '图书列表';

            $scope.toBookInfo = function(){
                $location.path('/bookInfo');
            };

        })

        .controller('bookCaseController' ,function($scope){
            $scope.title = '借书架';


        });

})();