function validar(){
    email = document.getElementById('email').value;
    nombre = document.getElementById('nombre').value;
    mensaje = document.getElementById('mensaje').value;

    if (email==0 || nombre==0 || mensaje==0){
        alert('Faltan completar campos del formulario');
    }
    else {
        alert('Gracias'+' '+ document.getElementById('nombre').value +' ' + 'por completar los datos');
    }
}

function contacto(){
}