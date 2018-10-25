/**
 * IIFE / Module pattern
 */
 var budgetController = (function() {
    var x = 23;
    var add = function(a) {
        return x + a;
    }
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();
/**
 * UI controller
 */
var UIController = (function() {
    // some code
})();
/**
 * Data Controller
 */
var controller = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicTest(5);
        return {
            anotherPublic: function() {
                console.log(z);
            }
        }
})(budgetController, UIController);
