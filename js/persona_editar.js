
//RECIBE ->
// id=1&nombre=MICROONDAS&precio=50000&stock=10&imagen=https://picsum.photos/200/300?grayscale

console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista
// [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts)

//// [[“id",3] , [“nombre",’tv50’]]
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nombre").value = decodeURIComponent(parts[1][1])
document.getElementById("domicilio").value = decodeURIComponent(parts[2][1])
document.getElementById("ciudad").value =decodeURIComponent( parts[3][1])
document.getElementById("departamento").value =decodeURIComponent( parts[4][1])
document.getElementById("provincia").value = decodeURIComponent(parts[5][1])
document.getElementById("actividad").value = decodeURIComponent(parts[6][1])
document.getElementById("dni").value = decodeURIComponent(parts[7][1])
document.getElementById("cuil").value =decodeURIComponent( parts[8][1])
document.getElementById("celular").value =decodeURIComponent( parts[9][1])
document.getElementById("email").value =decodeURIComponent( parts[10][1])
document.getElementById("foto").value =decodeURIComponent( parts[11][1])

function modificar() {
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let domicilio = document.getElementById("domicilio").value
    let ciudad = document.getElementById("ciudad").value
    let departamento = document.getElementById("departamento").value
    let provincia = document.getElementById("provincia").value
    let actividad = document.getElementById("actividad").value
    let dni = document.getElementById("dni").value
    let cuil = document.getElementById("cuil").value
    let celular = document.getElementById("celular").value
    let email = document.getElementById("email").value
    let foto = document.getElementById("foto").value
    
   
    let persona = {
        nombre: nombre,
        domicilio: domicilio,
        ciudad: ciudad,
        departamento: departamento,
        provincia: provincia,
        actividad: actividad,
        dni: dni,
        cuil: cuil,
        celular: celular,
        email: email,
        foto: foto,    
    }
    let url = "https://juanvi.pythonanywhere.com/personas/"+id
    var options = {
        body: JSON.stringify(persona),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./personas.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
