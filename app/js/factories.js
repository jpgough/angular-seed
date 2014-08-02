'use strict';

angular.factory('toDoItem', ['$http', function($rootScope) {
	  function ToDo(toDoData) {
		  if (toDoData) {
			  this.setData(toDoData);
		  }
	  };
	  
	  ToDo.prototype = {
		  setData: function(toDoData) {
			  angular.extent(this, toDoData)
		  }
	  }
	  
	  return ToDo;
}])