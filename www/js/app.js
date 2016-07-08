angular.module('app',['ionic','ui.router','ngCordova','ngBaiduMap'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      });
    })
    .config(function($stateProvider,$urlRouterProvider){

        $stateProvider.state('  login',{
            url:'/login',
            controller: 'loginController',
            templateUrl:'views/login/login.html'
        });

        $stateProvider.state('main',{
            url:'/main',
            controller: 'mainController',
            templateUrl:'views/main/main.html'
        });

        $stateProvider.state('insurance',{
            url:'/insurance',
            controller: 'insuranceController',
            templateUrl:'views/insurance/insurance.html'
        });

        $stateProvider.state('life_insurance',{
            url:'/life_insurance',
            controller: 'lifeInsuranceController',
            templateUrl:'views/life_insurance/life_insurance.html'
        });

        $stateProvider.state('insurance_detail',{
            url:'/insurance_detail/:company_name',
            controller: 'lifeInsuranceDetailController',
            templateUrl:'views/life_insurance/detail/detail.html'
        });

        $stateProvider.state('map',{
            url:'/map',
            controller: 'mapController',
            templateUrl:'views/map/map.html'
        });

      $urlRouterProvider.otherwise('/map');
    })


    .config(function(baiduMapApiProvider){
        baiduMapApiProvider.version('2.0').accessKey('2me89doy9NE2HgG7FmTXa0XZsedThXDD');
    })

    .factory('BaiduMapService', function($q, baiduMapApi) {
        return {
            getLocalCity: function() {
                return baiduMapApi.then(function(BMap) {
                    var localcity = new BMap.LocalCity();
                    return $q(function(resolve, reject) {
                        localcity.get(function(r) {
                            resolve(r);
                        });
                    });
                });
            }
            ,
            getBMap:function(callback){
                 baiduMapApi.then(function(BMap) {
                    callback(BMap);
                });
            }
        };
    })


    .factory('Insurances', function () {
        return [
            { company: 'AUD', date: '2015-02-03', detail: 'it is not a big deal' },
            { company: 'BRL', date: '2015-01-01', detail: 'it is not a big deal' },
            { company: 'CAD', date: '2015-03-01', detail: 'it is not a big deal' },
            { company: 'CNY', date: '2015-07-01', detail: 'it is a big deal'}
        ];
    })

