function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}

const addquestions = document.getElementById('borrar');


addquestions.addEventListener('click', (e) => {
    e.preventDefault()


    Swal.fire({
	
        html: '¿Seguro que deseas eliminar este libro ?',
        
		icon: 'question',
        showCancelButton: true,
       
       
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        background:  'rgba(206, 177, 233, 0.925)',
        backdrop: `
        url("/images/decoraciones/gatoo.gif")
 left top
 no-repeat
`
      })
     .then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'El Libro se eliminó correctamente',
                background:  'rgba(206, 177, 233, 0.925)',
                timer:5000,
                showConfirmButton:false,
              })

            const elForm = document.getElementById('formdestroy')
            setTimeout(doSomething, 3000);
        
                        function doSomething() {
                            submitForm(elForm)
                        }
            
        }
    })
   

})