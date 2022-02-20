function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}

const addquestions = document.getElementById('agregar');


addquestions.addEventListener('click', (e) => {
    e.preventDefault()


    Swal.fire({
	
        html: '¿Seguro que deseas agregar este nuevo libro ?',
        
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
                title: 'El Libro se agrego al Stock correctamente',
                timer:5000,
                showConfirmButton:false,
                background:  'rgba(206, 177, 233, 0.925)'
              })

            const elForm = document.getElementById('formadmin')
            setTimeout(doSomething, 3000);
        
                        function doSomething() {
                            submitForm(elForm)
                        }
            
        }
    })
   

})