/**
 * Created by manusis on 5/5/14.
 */


console.log("app.js included");

angular.module('mystore').run(['$scope','$rootScope',function($scope, $rootScope){
    if(!(localStorage && localStorage.currentUser)) {
        alert('no localstorage present');
        $rootScope.ms.goTo("/user/login");
    }
    else {
        if(!$rootScope.ms.user) {
            alert('please login again');
            $rootScope.ms.user = localStorage.currentUser;
        }else{
            alert('redirect to home page');
            $rootScope.ms.goTo('/');
        }
    }
}]);
