/**
 * Created by Administrator on 2017/10/10.
 */
(function(){
    angular.module('common.service' ,[])
        .service('storeService' ,function($window){
            var store = $window.localStorage;

            this.setItem = function(key ,value){
                if(!key || !value){
                    return false;
                }
                store.setItem(key ,JSON.stringify(value));
                return true;
            };

            this.getItem = function(key){
                if(!key){
                    return false;
                }
                var temp = store.getItem(key);
                return JSON.parse(temp);
            };

            this.removeItem = function(key){
                if(!key){
                    return false;
                }
                var temp = store.getItem(key);
                if(!temp){
                    return false;
                }
                return JSON.parse(temp);
            };

            this.removeAll = function(){
                store.removeAll();
            };
        });
})();