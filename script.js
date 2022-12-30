//Uppgift 1
var u1 = angular.module("Store", []);
u1.controller("StoreController", function ($scope) {
    $scope.Item = {
        Name: "Milk",
        Price: 15,
        Description: "A fresh brick of Milk"
    };
});

//Uppgift 2
u1.controller("u2Controller", function ($scope) {
    $scope.visibility = "On";
    $scope.testVisibility = false;

    $scope.toggleVisibility = function () {
        if ($scope.testVisibility)
        {
            $scope.testVisibility = false;
            $scope.visibility = "On";
        }
        else
        {
            $scope.testVisibility = true;
            $scope.visibility = undefined;
        }
    };
});

//Uppgift 3
u1.controller("u3Controller", function ($scope) {
    $scope.textField = "";
    $scope.doReverse = function () {
        return $scope.textField.split("").reverse().join("");
    };
});

//Uppgift 4
u1.controller("u4Controller", function ($scope) {
    $scope.pageName = "";
    $scope.classHome = "";
    $scope.classProfile = "";
    $scope.classMessages = "";

    $scope.hVisibility = undefined;
    $scope.pVisibility = undefined;
    $scope.mVisibility = undefined;

        $scope.home = function () {
        $scope.pageName = "Home";
        $scope.classHome = "active";
        $scope.classProfile = "";
        $scope.classMessages = "";

        $scope.hVisibility = "On";
        $scope.pVisibility = undefined;
        $scope.mVisibility = undefined;
    };

        $scope.profile = function () {
        $scope.pageName = "Profile";
        $scope.classHome = "";
        $scope.classProfile = "active";
        $scope.classMessages = "";

        $scope.hVisibility = undefined;
        $scope.pVisibility = "On";
        $scope.mVisibility = undefined;
    };

        $scope.messages = function () {
        $scope.pageName = "Messages";
        $scope.classHome = "";
        $scope.classProfile = "";
        $scope.classMessages = "active";

        $scope.hVisibility = undefined;
        $scope.pVisibility = undefined;
        $scope.mVisibility = "On";
    };
});

//Uppgift 5
u1.controller("u5Controller", function ($scope) {
    $scope.sec = 10;
    $scope.millisec = 100;
    $scope.timer;
        
    $scope.start = function () {
        $scope.timer = setInterval(function () {
            $scope.millisec--;
            if ($scope.millisec <= 0) {
                $scope.sec--;
                $scope.millisec = 100;
            }
            if ($scope.sec <= 0) {
                $scope.sec = 10;
                $scope.millisec = 100;
            }

            $scope.$apply();
        }, 10);
    };

    $scope.stop = function () {
        clearInterval($scope.timer);
    }
});

//Uppgift 6
u1.controller("u6Controller", function ($scope) {
    $scope.counter = 0;

    $scope.increment = function () {
        $scope.counter++;
    };
});

//Uppgift 7
u1.controller("u7Controller", function ($scope) {
    $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
});

//Uppgift 8
u1.controller("u8Controller", function ($scope) {
    $scope.item1 = {
        Name: "Bread",
        Price: 15,
        Description: "A good loaf of bread"
    };

    $scope.item2 = {
        Name: "Milk",
        Price: 22,
        Description: "Fresh milk"
    };

    $scope.item3 = {
        Name: "Candy",
        Price: 9,
        Description: "A bag of candy"
    };

    $scope.item4 = {
        Name: "Eggs",
        Price: 45,
        Description: "A 24 pack eggs"
    };

    $scope.item5 = {
        Name: "Beer",
        Price: 60,
        Description: "Unnecessarily expensive beer"
    };

    $scope.items = [$scope.item1, $scope.item2, $scope.item3, $scope.item4, $scope.item5];
    $scope.description = undefined;

    $scope.hover = function () {
        $scope.description = 1;
    };

    $scope.leave = function () {
        $scope.description = undefined;
    };
});

//Uppgift 9
u1.controller("u9Controller", function ($scope) {
    $scope.countTill;
    $scope.first;
    $scope.second;
    $scope.numbers = [];
    var list = angular.element(document.querySelector('#list'));

    var number;

    $scope.fizzBuzz = function () {

        angular.forEach(angular.element('.tagClass'), function (value, key) {
            $(this).remove();
            var data = angular.element(value);
        });

        if ($scope.first > $scope.second) {
            $scope.temp = $scope.second;
            $scope.second = $scope.first;
            $scope.first = $scope.temp;
        }

        for (var i = 1; i < $scope.countTill+1; i++) {
            if (i % $scope.second === 0 && i % $scope.first === 0) {
                number = { n: i, t: 'FizzBuzz' };
            }
            else if (i % $scope.second === 0) {
                number = { n: i, t: 'Buzz' };
            }
            else if (i % $scope.first === 0) {
                number = { n: i, t: 'Fizz' };
            }
            else {
                number = { n: i, t: '' };
            }

            $scope.numbers.push(number);
        }
    };
});