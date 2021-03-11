window.addEventListener('load', function() {
   
      //Error de no escribir un nombre de usuario
      let userError = document.querySelector(".userError");

      //Error de no escribir el password
      let passwordError = document.querySelector(".passwordError");

      // Formulario de login
      let sendForm = document.querySelector("form.loginForm");

      // Evento de enviar formulario
      sendForm.addEventListener('submit',function(e){

            let errors = []

            let user = document.querySelector("input.user");

            let password = document.querySelector("input.writePassword");

                  if (user.value == '') {
                        errors++;

                        userError.innerHTML = "Debes escribir un usuario";
                  } else {

                        userError.innerHTML = "";
                  }


                  if (password.value == '') {
                        errors++;

                        passwordError.innerHTML = "Debes escribir el password";
                  } else {

                        passwordError.innerHTML = "";
                  }

                  if (errors > 0) {

                        e.preventDefault()
                  }
   

});
});