var crypto = require("crypto-js");

$("#btn-txt-in").click(function(){ openModal("login"); });
$("#btn-icon-in").click(function(){ openModal("login"); });

function openModal(modal){
    $("#"+modal).openModal();
}

$("#btn-reg").click(function(){
    var nombre = $("#name").val();
    var cedula = $("#ced").val();
    var genero = $("input[name='genero']:checked").val();
    var usuario = $("#usr").val();
    var pass = $("#pass").val();

    var auth = usuario+"&&"+pass;
    auth = ""+crypto.AES.encrypt(auth,"cualquiercosa");

    var usr = {nombre: nombre, cedula: cedula, genero: genero, auth: auth};


    $.ajax({
        method:"POST",
        data:usr,
        datatype:"json",
        url:"http://localhost:8080/api/usuarios"
    }).done(function(res){
        Materialize.toast("Registro exitoso",4000);
    }).fail(function(){
        Materialize.toast("Error al registrar usuario",4000);
    });


});



