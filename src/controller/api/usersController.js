const db=require('../../database/models')

module.exports={
    'findUsers':function(req, res) {fetch('http://localhost:3003')
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

    res.status(404);
    res.json({error: "Ocurrio un error, por favor intentalo nuevamente"});
})
}

}