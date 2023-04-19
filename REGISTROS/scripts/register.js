//crear cosntructor
let alumnos=[]; //arreglo vacio

let contador=0;
function Alumno(nombreP,correoP,generoP,campusP,carreraP,matriculaP,materiaP,calificacion1P,calificacion2P,calificacion3P,promedioP){
    this.nombre=nombreP;
    this.correo=correoP;
    this.genero=generoP;
    this.campus=campusP;
    this.carrera=carreraP;
    this.matricula=matriculaP;
    this.materia=materiaP;
    this.calificacion1=calificacion1P;
    this.calificacion2=calificacion2P;
    this.calificacion3=calificacion3P;
    this.promedio=promedioP;
    this.id=contador++;
}

let inputNombre=document.getElementById("txtNombre");
let inputCorreo=document.getElementById("txtCorreo");
let inputGenero=document.getElementById("selGenero");
let inputCampus=document.getElementById("selCampus");
let inputCarrera=document.getElementById("selCarrera");
let inputMatricula=document.getElementById("txtMatricula");
let inputMateria=document.getElementById("txtMateria");
let inputCalificacion1=document.getElementById("txtCalificacion1");
let inputCalificacion2=document.getElementById("txtCalificacion2");
let inputCalificacion3=document.getElementById("txtCalificacion3");

function validacion(alumno){
    let valida=true;
    //reset los inputs
    inputNombre.classList.remove("error");
    inputCorreo.classList.remove("error");
    inputGenero.classList.remove("error");
    inputCampus.classList.remove("error");
    inputCarrera.classList.remove("error");
    inputMatricula.classList.remove("error");
    inputMateria.classList.remove("error");
    inputCalificacion1.classList.remove("error");
    inputCalificacion2.classList.remove("error");
    inputCalificacion3.classList.remove("error");
   
    if(alumno.nombre == ""){
        inputNombre.classList.add("error");
        valida=false;
    } 
    if(alumno.correo == ""){
        inputCorreo.classList.add("error");
        valida=false;
    } 
    if(alumno.genero == ""){
        inputGenero.classList.add("error");
        valida=false;
    } 
    if(alumno.campus == ""){
        inputCampus.classList.add("error");
        valida=false;
    } 
    if(alumno.matricula == ""){
        inputMatricula.classList.add("error");
        valida=false;
    } 
    if(alumno.carrera == ""){
        inputCarrera.classList.add("error");
        valida=false;
    } 
    if(alumno.materia == ""){
        inputMateria.classList.add("error");
        valida=false;
    } 
    if(alumno.calificacion1 == ""){
        inputCalificacion1.classList.add("error");
        valida=false;
    } 
    if(alumno.calificacion2 == ""){
        inputCalificacion2.classList.add("error");
        valida=false;
    } 
    if(alumno.calificacion3 == ""){
        inputCalificacion3.classList.add("error");
        valida=false;
    } 
    return valida;
}
var a;
var promedio;
//crear funcion registrar
function registro(){
    //let alumno=alumnos[i];
    //let suma=alumno.calificacion1+alumno.calificacion2
        var a=Number(inputCalificacion1.value);
        var b=Number(inputCalificacion2.value);
        var c=Number(inputCalificacion3.value);
        promedio=(a+b+c)/3;
        //promedio=Math.round(promedio,2,`,`,`.`);
    let newAlumno=new Alumno(inputNombre.value,inputCorreo.value,inputGenero.value,inputCampus.value,inputCarrera.value,inputMatricula.value,inputMateria.value,inputCalificacion1.value,inputCalificacion2.value,inputCalificacion3.value,promedio);
   if(validacion(newAlumno)==true){
    alumnos.push(newAlumno);
    imprimirAlumnos();
    //limpiarform();
    const DIV = document.getElementById("promedio");
    
    if(promedio>=7){a="Aprobado";
    let linea="";
    linea=`<div>
    <p>PROMEDIO: &nbsp; ${promedio.toFixed(2)}&nbsp;&nbsp;&nbsp; <p class="aprobar">${a}</p></p>
    </div>`;
    DIV.innerHTML=linea;
}
    else{a="Reprobado";
    let linea="";
    linea=`<div>
    <p>PROMEDIO: &nbsp; ${promedio.toFixed(2)}&nbsp;&nbsp;&nbsp; <p class="reprobar">${a}</p></p>
    </div>`;
    DIV.innerHTML=linea;
}
    //let linea="";
    //linea=`<div>
    //<p>PROMEDIO: &nbsp; ${promedio.toFixed(2)}&nbsp;&nbsp;&nbsp; ${a}</p>
    //</div>`;
   // DIV.innerHTML=linea;
 
    }
   
    //x.innerHTML=card[i];
}

function imprimirAlumnos(){
    let row="";
    for(let i=0; i<alumnos.length; i++){
        let alumno=alumnos[i];
        
        row += `
            <tr id="${alumno.id}">
                <td>${alumno.nombre}</td>
                <td>${alumno.correo}</td>
                <td>${alumno.genero}</td>
                <td>${alumno.campus}</td>
                <td>${alumno.carrera}</td>
                <td>${alumno.matricula}</td>
                <td>${alumno.materia}</td>
                <td>${alumno.calificacion1}</td>
                <td>${alumno.calificacion2}</td>
                <td>${alumno.calificacion3}</td>
                <td>${alumno.promedio.toFixed(2)}</td>
                <td><button class="btn-dark" onclick="borrarAlumno(${alumno.id});">Borrar</button></td>
            </tr>
        `;
    }
    document.getElementById("alumnostabla").innerHTML=row;
}



function limpiarform(){
    inputNombre.value="";
    inputCorreo.value="";
    inputGenero.value="";
    inputCampus.value="";
    inputCarrera.value="";
    inputMatricula.value="";
    inputMateria.value="";
    inputCalificacion1.value="";
    inputCalificacion2.value="";
    inputCalificacion3.value="";
    promedio="";
    a="";
    const DIV = document.getElementById("promedio");
    let linea="";
    linea=`<div>
    <p> &nbsp; ${promedio}&nbsp;&nbsp;&nbsp; ${a}</p>
    </div>`;
 
    DIV.innerHTML=linea;
}
function init(){
    }
    window.onload=init; 



    

    function borrarAlumno(identificador){
        document.getElementById(identificador).remove();
        alumnos.splice(identificador,1);
    }
    






function doSearch()
    {
        var bnom = prompt("Nombre del Alumno");
        const tableReg = document.getElementById('datos');
        const searchText = bnom;

        let total = 0;
        for (let i = 1; i < tableReg.rows.length; i++) {
            if (tableReg.rows[i].classList.contains("noSearch")) {
                continue;
            }

            let found = false;
            const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');

            for (let j = 0; j < cellsOfRow.length && !found; j++) {
                const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                    found = true;
                    total++;
                }
            }

            if (found) {
                tableReg.rows[i].style.display = '';
            } else {
                // si no ha encontrado ninguna coincidencia, esconde la
                // fila de la tabla
                tableReg.rows[i].style.display = 'none';
            }
        }

        // mostramos las coincidencias

        const lastTR=tableReg.rows[tableReg.rows.length-1];
        const td=lastTR.querySelector("td");
        lastTR.classList.remove("hide", "red");

        if (searchText == "") {
            lastTR.classList.add("hide");
        } else if (total) {
            //td.innerHTML="Se ha encontrado "+total+" coincidencia"+((total>1)?"s":"");
        } else {
            lastTR.classList.add("red");
            td.innerHTML="No se han encontrado coincidencias";
        }
    }



    