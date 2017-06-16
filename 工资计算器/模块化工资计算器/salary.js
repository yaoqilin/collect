/**
 * Created by Administrator on 2017/4/18.
 */
angular.module('salary',[])
.value('bxfl',{
    yanglao:0.08,
    yiliao:0.02,
    shiye:0.005,
    gongshang:0,
    shengyu:0,
    gongjijin:0.08
})
.factory('sqgz',function (bxfl) {
    return function (zonggongzi) {
        var sqgz = zonggongzi*(1-bxfl.yanglao-bxfl.yiliao-bxfl.shiye-bxfl.gongshang-bxfl.shengyu);
        return sqgz;
    }
        .factory('suodeshui',function () {
            return function (shuiqiangongzi) {
                var suodeshui = 0;
                if(shuiqiangongzi<=3500){
                    suodeshui = 0;
                }else {
                    var jsgz = shuiqiangongzi - 3500;
                    if(jsgz<=1500){
                        suodeshui = jsgz*0.03;
                    }else if(jsgz<=4500){
                        suodeshui = jsgz*0.1-105;
                    }else if(jsgz<=9000){
                        suodeshui = jsgz*0.2-555;
                    }else if(jsgz<=35000){
                        suodeshui = jsgz*0.25-1005;
                    }else if(jsgz<=55000){
                        suodeshui = jsgz*0.3-2755;
                    }else if(jsgz<=80000){
                        suodeshui = jsgz*0.35-5505;
                    }else {
                        suodeshui = jsgz*0.45-13505;
                    }
                }
                return suodeshui;
            }
        })
        .constructor('ctrl',function ($scope,bxfl,sqgz,suodeshui) {
            $scope.gongzi = 0;
            $scope.jiangjin = 0;
            $scope.jixiao = 0;
            $scope.bxfl = 0;
            $scope.zonggongzi = function () {
                return $scope.gongzi+$scope.jiangjin+$jixiao;
            }
            $scope.sqgz = function () {
                return sqgz($scope.zonggongzi());
            }
            $scope.suodeshui = function () {
                return suodeshui($scope.sqgz());
            }
            $scope.shuihougongzi = function () {
                return $scope.sqgz() - $scope.suodeshui();
            }
        })
        .directive('calc',function () {
            return{
                templateUrl:'calc.html'
            }
        })
})