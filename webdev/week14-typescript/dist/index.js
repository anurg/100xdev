"use strict";
//Initialize an empty map
const usersMap = new Map();
//Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: "Anurag" });
usersMap.set('xyz123', { id: 'xyz123', name: "Zebra" });
console.log(usersMap.get('xyz123'));
usersMap.forEach(x => console.log(x.name));
