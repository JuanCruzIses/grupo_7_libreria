const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword')
const Form = document.querySelector('#form');
const p = document.querySelector('.mensaje-error');

let contador = 0;
function contar(){
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
}

password.addEventListener('keypress', function(e){
    contador = (password.value.length);
    contar()
    
});

password.addEventListener('focusout', function(e){
    
    contador = (password.value.length);
    contar()
});

confirmPassword.addEventListener('blur', function(e){
    if (password.value != confirmPassword.value){
        p.innerText = 'Las contraseñas no coinciden';
        p.style.color = 'red'
    } else {
        p.innerText = '';
    }
})


