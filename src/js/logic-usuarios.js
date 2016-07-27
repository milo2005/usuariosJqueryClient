var crypto = require("crypto-js");

$("#btn-txt-in").click(function(){ openModal("login"); });
$("#btn-icon-in").click(function(){ openModal("login"); });

function openModal(modal){
    $("#"+modal).openModal();
}



