"use strict";

(function(){
  var app = angular.module("compliments");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    var vm = this;
    vm.comp = "you look nice."
    console.log('hola, mundo!');
  }

}());
