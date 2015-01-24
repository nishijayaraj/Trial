zacApp.factory('catService', function() {
	var id = 0;
	var mainList = [];
	var cList = []; // ref to entire selected object
	var setSelectedItem = function(value) {
		id = value;
	};
	var getSelectedItem = function() {
		return id;
	};
	var setMainList = function(list) {
		mainList = list;
		console.log(mainList);
	};
	var setCurrentList = function(list) {
		//cList.length = 0;
		cList = list;
	};
	var getCurrentList = function() {
		console.log("asdf");
		console.log(cList);
		return cList;
	};
	return {
		setSelectedItem : setSelectedItem,
		getSelectedItem : getSelectedItem,
		setMainList : setMainList,
		setCurrentList : setCurrentList,
		getCurrentList : getCurrentList
	};

});
