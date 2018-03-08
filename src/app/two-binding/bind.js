<!DOCTYPE html>  
<html>  
  
<head>  
    <title></title>  
    <script src="Script/angular.js"></script>  
    <script type="text/javascript">  
        var myApp = angular.module('myApp', [])  
            .controller('myController', function($scope) {  
                $scope.name = "Anoop";  
            });  
    </script>  
</head>  
  
<body ng-app="myApp">  
    <div ng-controller="myController">  
        Enter Name:<input type="text" ng-model="name" />  
        <p>Hello! {{name}}  
    </div>  
</body>  
  
</html