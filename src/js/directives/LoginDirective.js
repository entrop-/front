
app.directive('passwordStrength', function() {
    return {
        restrict: 'A',
        require: '?ngModel',

        link: function(scope, elem, attrs, ctrl) {
            scope.$watch('password', function(newVal) {

                scope.strength = isSatisfied(newVal && newVal.length >= 6) +
                isSatisfied(newVal && /[A-z]/.test(newVal)) +
                isSatisfied(newVal && /(?=.*\W)/.test(newVal)) +
                isSatisfied(newVal && /\d/.test(newVal));


                function isSatisfied(criteria) {
                    return criteria ? 1 : 0;
                }
            }, true);
        }

    }
});