function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}

const addquestions = document.getElementById('agregar');


addquestions.addEventListener('click', (e) => {
    e.preventDefault()


    Swal.fire({
	
        html: '¿Seguro que deseas agregar una nueva Pregunta?',
        
		icon: 'question',
        showCancelButton: true,
       
       
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const elForm = document.getElementById('formquest')
            submitForm(elForm)
        }
    })

})