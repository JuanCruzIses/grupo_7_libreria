function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}

const addquestions = document.getElementById('sicomprar');


addquestions.addEventListener('click', (e) => {
    e.preventDefault()


    Swal.fire({
	
        html: '¿Seguro que deseas realizar esta compra?',
        
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
                title: 'Este pedido ha sido realizado.',
                timer:5000,
                showConfirmButton:false,
                background:  'rgba(206, 177, 233, 0.925)'
              })

            const elForm = document.getElementById('formcarrito')
            setTimeout(doSomething, 3000);
        
                        function doSomething() {
                            submitForm(elForm)
                        }
            
        }
    })
   

})