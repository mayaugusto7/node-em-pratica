var myClass = require('./myclass');
var module2 = require('./module-2');
var group = require('./group');
var routes = require('./routes');

console.log(myClass.method());
console.log(module2.method());
console.log(module2.method2());

console.log();

group.one();
group.two();

console.log();

console.log(routes.users.getUser());

