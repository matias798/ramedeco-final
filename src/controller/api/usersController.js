const db=require('../../database/models')

module.exports={
    'findUsers':function(req, res, next) {
        db.users.findAll({usersUrl:'localhost'})

        .then(users=>{

// Counts how many users has the database
 let count= users.length;

// link with the details of the first user
let usersUrl=[]

// loop of users url with the detail of all the users
for (let index = 0 ; index <= users.length; index++) {
    usersUrl[index]='api/users/' + index ;
}
// end of loop

res.json({count, users, usersUrl});
      
})

// catches the error if exist
.catch(error=>{res.send(error);})
  
}

}