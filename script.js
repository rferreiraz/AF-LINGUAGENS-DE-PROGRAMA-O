const formulario = document.getElementById("formContato");

if(formulario){
    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });
}