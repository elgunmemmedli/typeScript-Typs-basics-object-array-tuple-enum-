
// object
// const user: {
// name : string;
// id : number;
// // array
// hobbies : string[];
// // tuple
// role : [number, string];
// } = {
//     name : "Elgun",
//     id: 7,
//     hobbies : ['sports', 'reading'],
//     role : [1,'moderator']
// };

// console.log(user.name);
// for(const item of user.hobbies){
//     console.log(item);  
// }
//  console.log(user.role[1] = 10); // Error role[1] => string



// enum
enum Role  {Admin, Moderator = 'Moderator' };
const user = {
        name : "Elgun",
        id: 7,
        hobbies : ['sports', 'reading'],
        role : Role.Moderator
    };
    console.log(user.role);
    


