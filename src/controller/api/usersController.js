const db=require('../../database/models')

module.exports={
    'findUsers':function(req, res) {
        
db.users.findAll()

.then(users=>{

let user=users;     

// Counts how many users has the database
 let count= user.length;

 // array of users details links 
 let userUrl=[];

//  loop for getting the detail url page
for (let index = 1; index < count+1 ; index++) {
    userUrl.push('localhost:3000/api/user/'+ index)
}

// hiddes all passwords and roles
for (let index = 0; index < user.length; index++) {

  user[index].password = null;
  user[index].roleId = null;

 }


res.json({count, user,userUrl});

      
})

// catches the error if exist
.catch(error=>{

res.status(404)

.json({error: "Ocurrio un error, por favor intentalo nuevamente"});

console.error(error)
})
  
},

'userDetail':function (req,res){
db.users.findByPk(req.params.id)
.then(user=>{

let name= user.first_name;

let lastName=user.last_name;

let email = user.email;

let username = user.username;

let address =user.address;

let avatar = 'localhost:3000/' + user.avatar;

res.json({name,lastName,email,username,address,avatar} )

})

// catches the error if exist
.catch(error=>{
    console.log(error);

    res.status(404);
    res.json({error: "Ocurrio un error, por favor intentalo nuevamente"});
})
}

}