const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword')
const form = document.querySelector('.form');
const p = document.querySelector('#mensaje-error');
const buttonRegister = document.querySelector('#button-register')

let contador = password.value.length;
function contar(){
    if (contador <= 4){
        p.innerText = 'La contraseña es muy debil';
        p.style.color = 'red';
    } else if (contador > 4 && contador <= 9){
        p.innerText = 'La contraseña es debil';
        p.style.color = 'orange';
    } else {
        p.innerText = 'La contraseña es segura';
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

buttonRegister.addEventListener('click', function(e){
    contador = password.value.length;
    if(contador <= 9){
        e.preventDefault()
        p.innerText = 'Tu contraseña no es segura';
    }
})

confirmPassword.addEventListener('blur', function(e){
    if (password.value != confirmPassword.value){
        p.innerText = 'Las contraseñas no coinciden';
        p.style.color = 'red'
    } else {
        p.innerText = '';
    }
})