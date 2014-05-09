'use strict';

function MailCtrl($scope) {
    $scope.submit = function() {
        console.log($scope.email);
        $scope.submitSuccess = true;
    };
}
