const db=require('../../database/models')

module.exports={
    'findUsers':function(req, res) {
        db.users.findAll({usersUrl:'localhost'})

        .then(users=>{

// Counts how many users has the database
 let count= users.length;

 // array of users details links 
 let usersUrl=[] ;
//  loop for getting the detail url page
for (let index = 1; index < count+1 ; index++) {
    usersUrl.push('localhost:3000/api/users/'+ index)
}


res.json({count, users,usersUrl});
      
})

// catches the error if exist
.catch(error=>{res.send(error);})
  
},

'userDetail':function (req,res){
db.users.findByPk(req.params.id)
.then(user=>{

let name= user.first_name;

let surname=user.last_name;

let email = user.email;

let username = user.username;

let address =user.address;

let avatar = 'localhost:3000/' + user.avatar;

res.json({name,surname,email,username,address,avatar} )

})

// catches the error if exist
.catch(error=>{
    console.log(error);
    res.send(error);})
}

}