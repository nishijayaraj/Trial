// create the controller and inject Angular's $scope
zacApp.controller('mainController', [
		"$scope",
		"$http",
		"$location",
		"catService",
		function($scope, $http, $location, catService) {
			// create a message to display in our view

			console.log("********************main");
			
			
			$http.get('data/category.json').success(
					function(data, status, headers, config) {
						$scope.list = [];
						$scope.list = data.items;
						catService.setMainList($scope.list);
					})

			.error(function(data, status, headers, config) {
				console.log('ERROR');
			});

			$scope.showItems = function(itemName, type, contents) {
				
				//$scope.selectedList = contents;
				console.log("as" + itemName + "  " + type);
				console.log($scope.selectedList);
				catService.setSelectedItem(itemName);
				catService.setCurrentList(contents);
				
				/*var log1 = [];
				angular.forEach($scope.list, function(value, key) {
					console.log("sssssssss");
					console.log(value);
					this.push(key + ': ' + value);
				}, log1);
				console.log("logggggg");
				console.log(log1);*/

				if (type === "grid")
					$location.path("/grid");
				else
					$location.path("/media");

			};

		} ]);

zacApp.controller('gridController', [
                             		"$scope",
                             		"$http",
                             		"$location",
                             		"catService",
                             		function($scope, $http, $location, catService) {
                             			
                             			$scope.selectedList=catService.getCurrentList();
                             			
                             		}]);
