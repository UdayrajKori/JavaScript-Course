const accountId = 123;
let name = "uday@gamil.com";
var password = "1212";
city = "Kapilvastu";

// accountId = 2; // not allowed

console.log(accountId);

name = "Ram";
password = "1234";
city = "Rupandehi";

let username;

/*

Prefer not use var
beacuse of issue in block scope and function scope

*/

console.table([accountId, name, password, city, username]);


