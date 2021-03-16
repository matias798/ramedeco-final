//validación front del formulario register 

window.addEventListener('load', function() {
    //capturo el formulario
    let registerForm = document.querySelector("form.registerform");

    //defino un evento sobre el submit del form
    registerForm.addEventListener('submit',function(e){

        //creo un array vacío donde se irán acumulando los errores de validación
        let errores = [];

        let first_name = document.querySelector("input.first_name");
        //en un if, capturo el valor que ingresó el usuario con la prop value y lo valido
        if(first_name.value == ""){
            //si se cumple, agrego un string al array de errores con push
            errores.push("El campo Nombre no puede quedar vacío")
        }
        if(first_name.value.length < 2){
            errores.push("El campo Nombre debe contener al menos 2 caracteres")
        }

        let last_name = document.querySelector("input.last_name");
        if(last_name.value == ""){
            errores.push("El campo Apellido no puede quedar vacío")
        }
        if(last_name.value.length < 2){
            errores.push("El campo Apellido debe contener al menos 2 caracteres")
        }

        let email = document.querySelector("input.email");
        if(email.value == ""){
            errores.push("El campo e-mail no puede quedar vacío")
        }
        //validación de mail válido
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(regexEmail.test(email.value) == false){
            errores.push("El e-mail debe ser válido")
        }
        //validación de mail ya registrado
        fetch('/repetir')
            .then(response => {
                return response.json()
            })
            .then(dataDecode => {
                console.log(dataDecode)
                //este resultado va a ser true si ya existe el mail en la DB o false si no existe
                if(dataDecode == true){
                    errores.push("El e-mail que estás ingresando ya está en uso")
                }
            })
            .catch(function(error){
                console.log(error);
            });

        let password = document.querySelector("input.password");
        if(password.value == ""){
            errores.push("El campo Contraseña no puede quedar vacío")
        }
        if(password.value.length < 2){
            errores.push("La contraseña debe contener al menos 8 caracteres")
        }
 
        let password_confirm = document.querySelector("input.password_confirm");
        if(password_confirm.value != password.value){
            errores.push("La confirmación de contraseña no coincide con la ingresada")
        }


    //si hay errores de validacion, prevengo el comportamiento por default del submit y muestro los errores con innerHTML
    if(errores.length > 0){
        let ulErrores = document.querySelector("div.errores ul")
        ulErrores.innerHTML = ""

        e.preventDefault();

        for(let i = 0; i < errores.length; i++){
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    
        }
    };
    });


})