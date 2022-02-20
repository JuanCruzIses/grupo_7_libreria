function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}

const addquestions = document.getElementById('agregar');


addquestions.addEventListener('click', (e) => {
    e.preventDefault()


    Swal.fire({
	
        html: '¿Seguro que deseas editar este libro ?',
        
		icon: 'question',
        showCancelButton: true,
       
       
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        background:  'rgba(206, 177, 233, 0.925)'
      })
     .then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'El Libro se editó correctamente',
                timer:5000,
                showConfirmButton:false,
                background:  'rgba(206, 177, 233, 0.925)',
                backdrop: `
                url("/images/decoraciones/gatoo.gif")
         left top
         no-repeat
       `
              })

            const elForm = document.getElementById('formedit')
            setTimeout(doSomething, 3000);
        
                        function doSomething() {
                            submitForm(elForm)
                        }
            
        }
    })
   

})