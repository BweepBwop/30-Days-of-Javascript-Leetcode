const createHelloWorld = () => () => "Hello World";
const f = createHelloWorld();
console.log(f()); 


/* I cut off any unnecessary function declarations in order to shorten the code and utilized the arrow functions
   this part ==> console.log(f()); is actually O(1) so its constant time 
*/
