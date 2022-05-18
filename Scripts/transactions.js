//Recibe los parametros
var params = new URLSearchParams(location.search)

//obtiene los parametros)
var perfil,users
var arrayNames=["Gera","Mali","Maui"]
var arrayControl=["control1","control2","control3"]
var nombre=params.get('name')
var names=document.getElementById("nombre")
var money=document.getElementById("saldo")
var other=document.getElementById("otro")

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
    names.textContent="Hola "+perfil.name
    money.textContent="Tu saldo actual es: $"+perfil.saldo
    other.textContent="Para hacer otra transaccion solo selecciona la opcion"

}

//funcion para depositar 
const deposito=()=>{

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
        money.textContent="Monto ingresado: $"+deposit +" saldo total: $"+perfil.saldo
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
        money.textContent="Monto retirado: $"+retire +" saldo total: $"+perfil.saldo
    }
}