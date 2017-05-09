console.log('this is the last test!');

car myApp = angular.model('myApp', []);

myApp.controller('ourFIrstController', function(){
  var vm = this;
  vm.thingOne = 'The Struts'
  vm.thingTwo = 'Wish I was seeing them.';

  vm.name = '';
})
