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
    cancelButton?.addEventListener('click', function (e) {
    signaturePad.clear();
    });
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let obrasocial = document.getElementById('obrasocial').value.toUpperCase();
        let nameparent = document.getElementById('nameparent').value.toUpperCase();
        let cuil = document.getElementById('cuil').value.toUpperCase();
        let contactemer = document.getElementById('contactemer').value.toUpperCase();
        let dni = document.getElementById('dni').value.toUpperCase();
        let cel = document.getElementById('cel').value.toUpperCase();
        let nacionalidad = document.getElementById('nacionalidad').value.toUpperCase();
        let telf = document.getElementById('telf').value.toUpperCase();
        let state = document.getElementById('state').value.toUpperCase();
        let fechanac = document.getElementById('fechanac').value.toUpperCase();
        let codigop = document.getElementById('codigop').value.toUpperCase();
        let provi = document.getElementById('provi').value.toUpperCase();
        let local = document.getElementById('local').value.toUpperCase();
        let domiL = document.getElementById('domiL').value.toUpperCase();
        let domiR = document.getElementById('domiR').value.toUpperCase();
        let nombreyapp = document.getElementById('nombreyapp').value.toUpperCase();
      generatePDF(obrasocial,nameparent,cuil,contactemer,dni,cel,nacionalidad,telf,state,fechanac,codigop,provi,local,domiL,domiR,nombreyapp);
    })

});

async function generatePDF(obrasocial,nameparent,cuil,contactemer,dni,cel,nacionalidad,telf,state,fechanac,codigop,provi,local,domiL,domiR,nombreyapp) {
    const image = await loadImage("img/Formularios/Datos_Personales.jpg");
    const signatureImage = signaturePad.toDataURL();
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(image, 'PNG', -10, -37, 600, 800);
    pdf.addImage(signatureImage, 'PNG', 320, 698, 280, 60);
    // Formato a la Fecha de Nacimiento.
    var salida = formato(fechanac)
    function formato(texto){
        return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
      }
    // End

    pdf.setFontSize(9);
    pdf.text(obrasocial,94,255)
    pdf.text(nameparent,376,243)
    pdf.text(cuil,76,243)
    pdf.text(contactemer,393,232)
    pdf.text(dni,75,232);
    pdf.text(cel,335,219);
    pdf.text(nacionalidad,96,219);
    pdf.text(telf,338,208)
    pdf.text(state,89,208)
    pdf.text(salida,123,196);
    pdf.text(codigop,479,184);
    pdf.text(provi,262,184);
    pdf.text(local,85,184);
    pdf.text(domiL,103,170);
    pdf.text(domiR,100,161);
    pdf.text(nombreyapp,125,150);
    


let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

    pdf.save("Datos_Personales-"+day+"/"+month+"/"+year+".pdf");

}

  //your javascript goes here
var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {


    showTab(currentTab);

});

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        // document.getElementById("regForm").submit();
        // return false;
        //alert("sdf");
        document.getElementById("nextprevious").style.display = "none";
        document.getElementById("all-steps").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("text-message").style.display = "block";




    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) { document.getElementsByClassName("step")[currentTab].className += " finish"; }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) { x[i].className = x[i].className.replace(" active", ""); }
    x[n].className += " active";
}  