angular.module("contactApp", []);
angular.module("contactApp").controller("contactCtrl", function ($scope){
   $scope.contacts = [];
   $scope.AddContact = function(contact){
     $scope.contacts.push(contact);
   };
});
