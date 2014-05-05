/**
 * Created by manusis on 5/5/14.
 */

angular.module('mystore').run(['$scope','$rootScope',function($scope, $rootScope){
    if(!(localStorage && localStorage.currentUser)) {
        $rootScope.ms.goTo("/user/login");
    }
    else {
        if(!$rootScope.ms.user) {
            alert('please login again');
            $rootScope.ms.user = localStorage.currentUser;
        }else{
            $rootScope.ms.goTo('/');
        }
    }
}]);
