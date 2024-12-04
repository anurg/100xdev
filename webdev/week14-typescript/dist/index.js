"use strict";
const displayUserProfile = function (user) {
    console.log(`User Id: ${user.Id} User Name: ${user.name}`);
};
const u1 = {
    Id: 1,
    name: "Anurag",
    email: "anurg@yahoo.com",
    createdOn: new Date()
};
// const u2:UserProfile = u1;
displayUserProfile(u1);
