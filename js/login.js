function logar(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "admin@email.com" && senha == "admin") {
        alert('Sucesso');
        location.href = "atividades.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}