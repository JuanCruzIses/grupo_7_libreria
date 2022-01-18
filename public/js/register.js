const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword')
const Form = document.querySelector('#form');
const p = document.querySelector('.mensaje-error');

let contador = 0;

password.addEventListener('keypress', function(e){
    
    contador = (password.value.length);

    if (contador <= 4){
        p.innerText = 'La contraseña es muy debil';
        p.style.color = 'red';
    } else if (contador > 4 && contador <= 9){
        p.innerText = 'La contraseña es debil';
        p.style.color = 'orange';
    } else {
        p.innerText = 'La contraseña es aceptable';
        p.style.color = 'green';
    }
});

confirmPassword.addEventListener('blur', function(e){
    if (password.value != confirmPassword.value){
        p.innerText = 'Las contraseñas no coinciden';
    } else {
        p.innerText = '';
    }
})


