$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true
    })

$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})
  $('#Telefone').mask('(00) 00000-0000')
  
  $('form').validate({
    rules: {
       nome: {
        required: true
       },
       email: {
        required: true,
        email: true
       },
       telefone: {
        required: true
       },
       mensagem: {
        required: true,
       },
       veiculoDeInteresse: {
        required: false,
       }
    },

    messages: {
        nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function(){
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
let camposIncorretos = validador.numberOfInvalids();
if (camposIncorretos) {
alert(`Existem ${camposIncorretos} campos incorretos.`);
evento.preventDefault(); // Impede o envio do formulário caso haja campos incorretos
}
}
})

$('.lista-veiculos button').click(function() {
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interesse').val(nomeVeiculo);

    $('html, body').animate({
        scrollTop: destino.offset().top
    }, 1000);
});

})