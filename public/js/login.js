window.addEventListener('load', function() {

      //Considerar campos Usuario y Contraseña
   
      //Error de no escribir un nombre de usuario
      let userError = document.querySelector(".userError");

      //Error de no escribir el password
      let passwordError = document.querySelector(".passwordError");

      // Formulario de login
      let sendForm = document.querySelector("form.loginForm");

      // Evento de enviar formulario
      sendForm.addEventListener('submit',function(e){

            // Array para errores
            let errors = []

            //input de usuario
            let user = document.querySelector("input.user");

            //input de password
            let password = document.querySelector("input.writePassword");

                  // Si el usuario está vacío
                  if (user.value == '') {
                       
                        //Se suma un error
                        errors++;

                        //El error se muestra en el HTML
                        userError.innerHTML = "Por favor escribe tu nombre de usuario";
                  } else {

                        //no se muestra error
                        userError.innerHTML = "";
                  }


                  //Si la contraseña está vacía
                  if (password.value == '') {
                       
                       //Se suma un error
                        errors++;

                        //se muestra el error 
                        passwordError.innerHTML = "Debes escribir el password";
                  } else {

                        //No muestro ningún error
                        passwordError.innerHTML = "";
                  }

                  //Si existe un error
                  if (errors > 0) {

                        //No se envía el formulario
                        e.preventDefault()
                  }
   

});
});