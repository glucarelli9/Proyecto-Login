function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {


    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    var cancelButton = document.getElementById('clear');
    cancelButton.addEventListener('click', function (event) {
    signaturePad.clear();
    });
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
	    let observaciones = document.getElementById('observaciones').value.toUpperCase();
	    let adestino = document.getElementById('adestino').value.toUpperCase();
        let adProcedencia = document.getElementById('adProcedencia').value.toUpperCase();
        let aclaracion = document.getElementById('aclaracion').value.toUpperCase();
        let emailContacto = document.getElementById('emailContacto').value;
        let telefonoContacto = document.getElementById('telefonoContacto').value;
        let dniLegajoLicencia = document.getElementById('dniLegajoLicencia').value;
        let horariofechaFinalizacion = document.getElementById('horariofechaFinalizacion').value.toUpperCase();
        let fechaFinalizacion = document.getElementById('fechaFinalizacion').value.toUpperCase();
        let horarioFechaInicio = document.getElementById('horarioFechaInicio').value.toUpperCase();
        let fechaInicio = document.getElementById('fechaInicio').value.toUpperCase();
        // Texto Medio
        let tipoAeronave = document.getElementById('tipoAeronave').value.toUpperCase();
        let matriculaExtension = document.getElementById('matriculaExtension').value.toUpperCase();
        let adAlternativa2 = document.getElementById('adAlternativa2').value.toUpperCase();
        let adAlternativa = document.getElementById('adAlternativa').value.toUpperCase();
        // Primeros dos
        let adDestino = document.getElementById('adDestino').value.toUpperCase();
        let presentadoPor = document.getElementById('presentadoPor').value.toUpperCase();
        // no va
/*         let hijos = document.querySelector('input[name="hijos"]:checked').value;
        let numeroHijos = document.getElementById('numeroHijos').value;
        let discapacidad = document.querySelector('input[name="discapacidad"]:checked').value;
        let discapacidadDesc = document.getElementById('discapacidad-desc').value;
 */        generatePDF( observaciones,adestino, adProcedencia, aclaracion, emailContacto, telefonoContacto, dniLegajoLicencia,
              horariofechaFinalizacion, fechaFinalizacion, horarioFechaInicio, fechaInicio, 
             tipoAeronave, matriculaExtension, adAlternativa2, adAlternativa, adDestino, presentadoPor, 
            );
    })

});

async function generatePDF( observaciones, adestino, adProcedencia,
     aclaracion, emailContacto, telefonoContacto, dniLegajoLicencia, horariofechaFinalizacion, 
     fechaFinalizacion, horarioFechaInicio, fechaInicio, tipoAeronave, matriculaExtension, 
     adAlternativa2, adAlternativa, adDestino, presentadoPor) {
    const image = await loadImage("img/Declaracion.jpg");
    const signatureImage = signaturePad.toDataURL();
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 320, 698, 280, 60);
    // IF Para los SELECT SOLICITUD
    pdf.setFontSize(12);
    
    // Siguientes Textos
    pdf.setFontSize(8); //DESEMBARCAN
    pdf.text(observaciones, 390, 326);
    pdf.setFontSize(12);
    
    pdf.text(adestino, 40, 422); // Nombre y apellidos
    pdf.setFontSize(12);
    pdf.text(adProcedencia, 350, 164);   // Vuelo Numero
    pdf.text(presentadoPor, 130, 144);   //Explotador
    pdf.text(adDestino, 200, 164);    // Marcas de Nacionalidad y de Matricula
    // Texto Medio 
    pdf.text(adAlternativa, 450, 164);   // Fecha
    pdf.text(adAlternativa2, 130, 184);   // Salida de.....
    pdf.text(matriculaExtension, 350, 184);  // LLegada a.....
    pdf.text(tipoAeronave, 40, 278); //LUGAR RUTA DE VUELO
    //Fecha
    var lMargin=148
    var rMargin=-65;
    var pdfInMM=279;  
    var lines = pdf.splitTextToSize(fechaInicio, (pdfInMM-rMargin-lMargin)); // NOMBRES DE LA TRIPU
    pdf.text(lMargin, 278, lines);  
    /* pdf.text(fechaInicio, 150, 278); */ 
    pdf.text(horarioFechaInicio, 250, 422); // NACIONALIDAD
    pdf.text(fechaFinalizacion, 410, 422); // OBSERVACIONES
    pdf.setFontSize(8);
    pdf.text(horariofechaFinalizacion, 402, 278);  // LUGAR DE SALIDA
    pdf.text(dniLegajoLicencia, 390, 287); // EMBARCAN
    pdf.text(telefonoContacto, 470, 297); // CONTINUAN EN EL MISMO VUELO
    pdf.text(emailContacto, 402, 318); // Lugar de llegada
    pdf.text(aclaracion, 470, 337);
    /* var lMargin=38;
    var rMargin=-255;
    var pdfInMM=279;  
    var lines = pdf.splitTextToSize(otherInformation, (pdfInMM-rMargin-lMargin));
    pdf.text(lMargin, 438, lines); */ //cortar texto 

    
    //tipo de vuelo o motivo 
  /*   if(parseInt(tipoVuelo) == 1){
        pdf.setFontSize(14);
        pdf.text("X", 102, 581);
    }
    if(parseInt(tipoVuelo) == 2){
        pdf.setFontSize(14);
        pdf.text("X", 170, 581);
    }
    if(parseInt(tipoVuelo) == 3){
        pdf.setFontSize(14);
        pdf.text("X", 220, 581);
    }
    if(parseInt(tipoVuelo) == 4){
        pdf.setFontSize(14);
        pdf.text("X", 263, 581);
    }
    if(parseInt(tipoVuelo) == 5){
        pdf.setFontSize(14);
        pdf.text("X", 310, 581);
    } */
  
    
    
   


    /*/Switch 2 
    if (parseInt(switch1) === 1) {
       pdf.text("X", 533, 4);
    } else {
        pdf.circle(435,535,6,'FD');
        pdf.setFontSize(14);
        pdf.text(397,530,"X"); 
        pdf.text(478,535,"X");
    } */
  

/*
    pdf.setFillColor(0,0,0);


    if (parseInt(hijos) === 0) {
        pdf.circle(255, 374, 4, 'FD');
    } else {
        pdf.circle(190, 374, 4, 'FD');
        
    }

    if (parseInt(discapacidad) === 0) {
        pdf.circle(285, 718, 4, 'FD');
    } else {
        pdf.circle(240, 718, 4, 'FD');
  
    }
*/
//fecha
let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

    pdf.save("Declaracion_General-"+day+"/"+month+"/"+year+".pdf");

}