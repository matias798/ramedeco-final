window.addEventListener('load', function() {

    // Declaro donde se mostrara el error de no escribir un titulo a traves de un innerHtml
    let titleError = document.querySelector(".titleError");


    // Declaro donde se mostrara el error de tener menos de 5 caracteres
    let titleLength = document.querySelector(".titleLength");

        // Declaro donde se mostrara el error de no escribir una descripcion a traves de un innerHtml
        let descriptionErrors = document.querySelector(".descriptionErrors");

        // Declaro donde se mostrara el error de no tener suficientes caracteres en la descripcion
        let descriptionlength = document.querySelector(".descriptionlength");

        
         // Formulario de crear productos
    let createform = document.querySelector("form.editForm");

      // Evento de enviar formulario
      createform.addEventListener('submit',function(e){

        // Array de errores 
        let errors=[]
    
        //input de titulo
    let title = document.querySelector("input.title");

    // textarea de descripcion
    let Description = document.querySelector("textarea.editDescription");

  // si no hay nada escrito en el titulo
  if(title.value == '')
  {
    // Sumo a el array de errores un error mas
      errors++;

    //   muestro en el html el error
      titleError.innerHTML = "Debes escribir un titulo";
  }

  else{
     
     // no muestro ningun error en el html 
      titleError.innerHTML = "";
  }

  
  

// si el titulo tiene menos de 5 caracteres
if(title.value.length < 5 )
{
    // Sumo a el array de errores un error mas
    errors++;

    titleLength.innerHTML=' <div>El titulo debe tener minimamente 5 caracteres</div>';
}

else{

    titleLength.innerHTML = "";
}

// Si no hay nada escrito en la descripcion
if(Description.value == '')
{

 // Sumo a el array de errores un error mas
 errors++;
    descriptionErrors.innerHTML = "<div>Debes escribir una descripcion</div>";
}

else{  
    descriptionErrors.innerHTML = "";
}


// si el titulo tiene menos de 20 caracteres
if(Description.value.length < 20 )
{
    errors++;
    descriptionlength.innerHTML = "<div>La descripcion debe tener minimamente 20 caracteres</div>";

        }

else{
    descriptionlength.innerHTML = "";
   }


/**** En caso de tener un error... ***/
if (errors > 0 )
{

//no se envia el formlario 
e.preventDefault();

}

});
});