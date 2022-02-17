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
      })
   
        const elForm = document.getElementById('formularioadd')
      
        submitForm(elForm)
      
           
        
    
})
