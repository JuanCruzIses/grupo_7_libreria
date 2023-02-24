function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}

const eliminarLibro = document.querySelectorAll('form#borrarlibro button#borrar');



for (var i = 0; i < eliminarLibro.length; i++) {
eliminarLibro[i].addEventListener('click', (e) => {

    e.preventDefault()
    Swal.fire({
	
        html: '¿Estas seguro que quieres eliminar este producto?',
        
		icon: 'question',
        showCancelButton: true,
       
       
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const elForm = document.getElementById('borrarlibro')
            submitForm(elForm)
        }
    })
})
  }