//validación front del formulario register 

window.addEventListener('load', function() {

    //validación username
    let username = document.querySelector("input.username")
    let username_error = document.querySelector(".username-error")

        username.addEventListener('blur', () => {
            if(username.value == ""){
                username_error.innerHTML = "El nombre de usuario no puede quedar vacío"
            }else{
                username_error.innerHTML = ""
            }
        })
 
    //validacion first name    
    let first_name = document.querySelector("input.first_name")
    let first_name_error = document.querySelector(".firstname-error")

        first_name.addEventListener('blur', () => {
            if(first_name.value == "" || first_name.value.length < 2){
                first_name_error.innerHTML = "El nombre no puede quedar vacío o contener menos de 2 caracteres"
            }else{
                first_name_error.innerHTML = ""
            }
        })

    //validacion last name 
    let last_name = document.querySelector("input.last_name")
    let last_name_error = document.querySelector(".lastname-error")

        last_name.addEventListener('blur', () => {
            if(last_name.value == "" || last_name.value.length < 2){
                last_name_error.innerHTML = "El apellido no puede quedar vacío o contener menos de 2 caracteres"
            }else{
                last_name_error.innerHTML = ""
            }
        })

    //validacion del mail
    let email = document.querySelector("input.email")
    let email_error = document.querySelector(".email-error")

        email.addEventListener('blur', () => {
            const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if(email.value == ""){
                email_error.innerHTML = "El e-mail no puede quedar vacío"
            }else if(regexEmail.test(email.value) == false){
                email_error.innerHTML = "El e-mail debe ser válido"
            }else{
                email_error.innerHTML = "" 
            }
        })
        
    //validacion password
    let password = document.querySelector("input.password")
    let password_error = document.querySelector(".password-error")

        password.addEventListener('blur', () => {
            if(password.value == ""){
                password_error.innerHTML = "La contraseña no puede quedar vacía"
            }else if(password.value.length < 8){
                password_error.innerHTML = "La contraseña debe contener al menos de 8 caracteres"
            }else{
                password_error.innerHTML = ""
            }
        })
        
    let password_confirm = document.querySelector("input.password_confirm")
    let password_confirm_error = document.querySelector(".password-conf-error")

    password_confirm.addEventListener('blur', () => {
        if(password_confirm.value != password.value){
            password_confirm_error.innerHTML = "La confirmación de contraseña no coincide con la ingresada"
        }else{
            password_confirm_error.innerHTML = ""
        }
    })

    let registerForm = document.querySelector("form.registerform")
    registerForm.addEventListener("submit",function(e){
        //validación de mail ya registrado
        fetch('/repetir')
            .then(response => {
                return response.json()
            })
            .then(dataDecode => {
                console.log(dataDecode)
                //este resultado va a ser true si ya existe el mail en la DB o false si no existe
                if(dataDecode == true){
                    email_error.innerHTML = "El e-mail que estás ingresando ya está en uso"
                }
            })
            .catch(function(error){
                console.log(error);
            });
            
        if(error != ""){
            e.preventDefault();
        }
    })

});
