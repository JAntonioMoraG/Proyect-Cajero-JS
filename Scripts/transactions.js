//Recibe los parametros
var params = new URLSearchParams(location.search)

//obtiene los parametros)
var perfil,users
var arrayNames=["Gera","Mali","Maui"]
var arrayControl=["control1","control2","control3"]
var nombre=params.get('name')
var datos=document.getElementById("data")
//Validaciones iniciales
for(let i=0;i<arrayNames.length;i++){
    if(nombre==arrayNames[i]){
        if(!(arrayControl[i] in localStorage)){
            localStorage.setItem(arrayControl[i],1)
            users={name: nombre , saldo: parseInt(params.get('saldo'))}
        }
        else{
            users={name: nombre, saldo: JSON.parse(localStorage.getItem(arrayNames[i])).saldo}
        }
        localStorage.setItem(arrayNames[i], JSON.stringify(users))
        perfil = JSON.parse(localStorage.getItem(arrayNames[i]))
        
    }
}

//funcion consultar saldo
const consulta=()=>{
    data.innerHTML="Hola "+perfil.name+"<br>Tu saldo actual es: $"+perfil.saldo

}

//funcion para depositar 
const deposito=()=>{
    data.textContent=""
    deposit=parseInt(prompt("Ingresa la cantidad a depositar"))
    perfil.saldo+=deposit
    if(deposit>990){
        perfil.saldo-=deposit
        window.alert("No puedes depositar mas de $990 intenta de nuevo")
    }
    
    else if(perfil.saldo>990){
        perfil.saldo-=deposit
        window.alert("No puedes depositar esa cantidad porque tu saldo va a superar $990 intenta de nuevo")
    }
    else{
        users.saldo=perfil.saldo
        localStorage.setItem(perfil.name, JSON.stringify(users))
        data.innerHTML="Monto ingresado: $"+deposit +"<br>saldo total: $"+perfil.saldo
    }
}

//funcion para retirar
const retiro=()=>{
    retire=parseInt(prompt("Ingresa la cantidad a retirar"))
    perfil.saldo-=retire
    if(retire>980){
        perfil.saldo+=retire
        window.alert("No puedes retirar mas de $980 tu cuenta debe tener al menos $10 intenta de nuevo")
    }
    else if(perfil.saldo<10){
        perfil.saldo+=retire
        window.alert("No puedes tener menos de $10 intenta de nuevo")
    }
    else{
        users.saldo=perfil.saldo
        localStorage.setItem(perfil.name, JSON.stringify(users))
        data.innerHTML="Monto retirado: $"+retire +"<br>saldo total: $"+perfil.saldo
    }
}