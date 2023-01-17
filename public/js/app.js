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
        let equipmentB = document.getElementById('equipmentB').value.toUpperCase();
        let pilotInCommand = document.getElementById('pilotInCommand').value.toUpperCase();
        let aircraftColourAndMarkings = document.getElementById('aircraftColourAndMarkings').value.toUpperCase();
        let aircraftIdentification = document.getElementById('aircraftIdentification').value.toUpperCase();
        let wakeTurbulenceCat = document.getElementById('wakeTurbulenceCat').value;
        let flightRules = document.getElementById('flightRules').value;
        let equipmentA = document.getElementById('equipmentA').value.toUpperCase();
        let typeOfFlight = document.getElementById('typeOfFlight').value;
        let typeOfAircraft = document.getElementById('typeOfAircraft').value.toUpperCase();
        let time = document.getElementById('time').value;

        let time2 = document.getElementById('time2').value;

        let totalEet = document.getElementById('totalEet').value;

        let altnAerodrome = document.getElementById('altnAerodrome').value.toUpperCase();
        let cruisingSpeed = document.getElementById('cruisingSpeed').value.toUpperCase();
        let level = document.getElementById('level').value.toUpperCase();
        let route = document.getElementById('route').value.toUpperCase();
        let destinationAerodrome = document.getElementById('destinationAerodrome').value.toUpperCase();
        let departureAerodrome = document.getElementById('departureAerodrome').value.toUpperCase();
       
        let altnAerodrome2 = document.getElementById('altnAerodrome2').value.toUpperCase();

        let otherInformation = document.getElementById('otherInformation').value.toUpperCase();
        let grupo = document.querySelector('input[name="grupo"]:checked').value;
        if (grupo === 'on'){
            grupo = ''
        };
        console.log(grupo);
 
        let endurance = document.getElementById('endurance').value;

     

        let hijos = document.querySelector('input[name="hijos"]:checked').value;
        let numeroHijos = document.getElementById('numeroHijos').value;
        let discapacidad = document.querySelector('input[name="discapacidad"]:checked').value;
        let discapacidadDesc = document.getElementById('discapacidad-desc').value;
        let personOnBoard = document.getElementById('personOnBoard').value;

        generatePDF(equipmentB, pilotInCommand, aircraftColourAndMarkings, aircraftIdentification, wakeTurbulenceCat, flightRules, equipmentA, typeOfFlight, typeOfAircraft, time, personOnBoard, endurance, altnAerodrome, otherInformation, altnAerodrome2, departureAerodrome, time2, grupo, destinationAerodrome, route, totalEet, cruisingSpeed, level, hijos, numeroHijos, discapacidad, discapacidadDesc);
    })

});

async function generatePDF(equipmentB, pilotInCommand, aircraftColourAndMarkings, aircraftIdentification, wakeTurbulenceCat, flightRules, equipmentA, typeOfFlight, typeOfAircraft, time, departureAerodrome, personOnBoard, endurance, otherInformation, altnAerodrome2, altnAerodrome, grupo, time2, destinationAerodrome, route, cruisingSpeed, totalEet, level, hijos, numeroHijos, discapacidad, discapacidadDesc) {
    const image = await loadImage("img/formulario.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');
    
    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'JPG', 20, 720, 200, 60);

    pdf.setFontSize(12);
    pdf.text(equipmentB, 475, 243);
    pdf.text(pilotInCommand,70,710);
    pdf.text(aircraftColourAndMarkings,70,652);
    pdf.lstext(aircraftIdentification, 167, 214, 14);
    pdf.lstext(wakeTurbulenceCat, 303, 243, 14);
    pdf.lstext(altnAerodrome, 80, 273, 14);
    pdf.lstext(time, 198, 273, 14);
    pdf.text(equipmentA, 410, 243);
    pdf.lstext(totalEet, 40, 303, 14);
    
    var lMargin = 205;
    var rMargin = -297;
    var pdfInMM = 249;
    var lines2 = pdf.splitTextToSize(route, (pdfInMM-lMargin-rMargin));
    pdf.text(lMargin,303,lines2);

    
    pdf.lstext(destinationAerodrome, 81, 407, 14);
    
    var lMargin=38;
    var rMargin=-255;
    var pdfInMM=279;  
    var lines = pdf.splitTextToSize(otherInformation, (pdfInMM-rMargin-lMargin));
    pdf.text(lMargin, 438, lines);




    pdf.lstext(endurance, 320, 408, 14);

//endurance, 68, 533, 14);
//departureAerodrome, 320, 408, 14);
//personOnBoard, 195, 534, 14);

    pdf.setFontSize(12);
    pdf.text(flightRules, 360, 213);
    pdf.text(typeOfFlight, 474, 213);
    pdf.lstext(typeOfAircraft, 138, 244, 14)
    pdf.lstext(level, 133, 303, 14);
    pdf.lstext(departureAerodrome, 195, 534, 14);
    pdf.lstext(altnAerodrome2, 432, 408, 14);
    pdf.text(time2, 219, 408);
    pdf.lstext(cruisingSpeed,209,407,14);

    pdf.setFontSize(12);
    pdf.lstext(personOnBoard, 68, 533, 14);


    pdf.setFillColor(0,0,0);
    if (document.getElementById('grupo1').checked) {
        pdf.circle(397,530,6,'FD');
        pdf.setFontSize(14);
        pdf.text(435,535,"X");  //X en Switch 2
        pdf.text(478,535,"X");  //X en Swtich 3
    } 
    if (document.getElementById('grupo2').checked) {
        pdf.circle(440,530,6,'FD');
        pdf.setFontSize(14);
        pdf.text(393,535,"X"); 
        pdf.text(478,535,"X");
    } 

    if (document.getElementById('grupo3').checked) {
        pdf.circle(481,530,6,'FD');
        pdf.setFontSize(14);
        pdf.text(393,535,"X"); 
        pdf.text(435,535,"X");
    }


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

    pdf.save("FPL-"+day+"/"+month+"/"+year+".pdf");

}