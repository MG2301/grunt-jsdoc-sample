/**
 * @author Bertrand Chevrier <chevrier.bertrand@gmail.com>
 */

/**
 * The dummy Test pseudo-class
 * @constructor
 */
function Test(){
    this.value = true;
}

/**
 * Dummy test method
 * @memberOf Test
 */
Test.prototype.test = function(){
    console.log(this.value === true ? 'OK' : 'KO');
};
