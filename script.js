
function onhover(){
    document.getElementById("hover").style.display="inline-block";
    document.getElementById("hover2").style.display="inline-block";
}
function offhover(){
    document.getElementById("hover").style.display="none";
    document.getElementById("hover2").style.display="none";
}   

function validar(){
    let cpf = document.getElementById("cpf").value.replace(/\D+/g,'');
    let validacao = cpfValido(cpf);
    if(validacao){
        document.getElementById('sucess').style.display="inline-block";
        document.getElementById('invalid').style.display="none";
        document.getElementById('header').style.background="green";
        document.getElementById('form').style.background="GreenYellow";
        document.getElementById('sucess').style.color="GreenYellow";
        

    }else{
        document.getElementById('invalid').style.display="inline-block";
        document.getElementById('invalid').style.color="red";
        document.getElementById('sucess').style.display="none";
        document.getElementById('header').style.background="FireBrick";
        document.getElementById('form').style.background="red";
        
    }

}
function cpfValido(cpf){
    if(cpf.length!=11){
        return false;
    }else{
        let numeros = cpf.substring(0,9);
        let digito = cpf.substring(9);
    
        //validando o primeiro digito
        var soma = 0;
        for(var i =10; i>1;i--){
            soma+=numeros.charAt(10-i)*i;
        } 
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma%11);
        if(resultado!=digito.charAt(0)){
            return false;
        }
        //validando o segundo digito
        let numero = cpf.substring(0,10);
        var soma=0;
        var resultado=0;
        for(var j =11; j>1;j--){
            soma+=numero.charAt(11-j)*j;
        } 
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma%11);
        if(resultado!=digito.charAt(1)){
            return false;
        }
        return true;
    }
}