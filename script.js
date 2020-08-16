$(document).ready(function(){
$("#Cep").focusout(function(){

    var cep = $("#Cep").val();
    cep = cep.replace("-", "");

    var urlStr = "https://viacep.com.br/ws/"+cep+"/json";

    
    $.ajax({
    url : urlStr,
    type : "get",
    dataType :"json",
    success : function(data){
        console.log(data);
        $("#cidade").val(data.localidade);
        $("#estado").val(data.uf);
        $("#bairro").val(data.bairro);
        $("#rua").val(data.logradouro);
        $("#complemento").val(data.complemento);



    },
   error: function(erro){
      alert("CEP Não encontrado")
   }   
   });

});






})