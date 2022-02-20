function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}

const newproductAdd = document.getElementById('agregar')


newproductAdd.addEventListener('click', (e) => {
    e.preventDefault()

   

    Swal.fire({
        icon: 'success',
        title: 'El Libro se agrego a su carrito correctamente',
        timer:5000,
        showConfirmButton:false,
        background:  'rgba(206, 177, 233, 0.925)',
        backdrop: `
        url("/images/decoraciones/gatoo.gif")
 left top
 no-repeat
`
      })
   
        const elForm = document.getElementById('formularioadd')
      
        submitForm(elForm)
      
           
        
    
})
