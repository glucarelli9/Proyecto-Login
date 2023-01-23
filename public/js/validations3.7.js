let textareaRecorded = null;
let coordenadaDep = null;
let coordenadaDest = null;
let coordenadaAltn = null;
let coordenadaAltn2 = null;

//string1 texto largo
//string 2 texto corto
function deleteFromString(string1, string2) {
    return string1.replace(" " + string2, "");
}

function dof() {
    var fecha = $('#dateOfFlight').val();
    var salida = formato(fecha);

    function formato(texto) {
        return texto.replace(/^(\d{2})(\d{2})-(\d{2})-(\d{2})$/g, '$2$3$4');
    }

    $('textarea[name=otherInformation]').val("DOF/" + salida + " ");
}

function autocompletar() {
    var minimo_letras = 3; // minimo letras visibles en el autocompletar
    var palabra = $('#departureAerodromeDiv .bs-searchbox input').val();
    //Contamos el valor del input mediante una condicional
    if (palabra.length >= minimo_letras) {
        $.ajax({
            url: 'mostrarAerodromos.php',
            type: 'POST',
            data: {palabra: palabra},
            success: function (data) {
                $('#departureAerodrome').html(data);
                $('#departureAerodrome').selectpicker('refresh');

                $('.inner.show ul li a').click(function () {
                    textareaRecorded = ($('textarea[name=otherInformation]').val());
                    if ($("#departureAerodrome").val() == "ZZZZ") {
                        var textarea = ($('textarea[name=otherInformation]').val());
                        textareaArray = textarea.split(" ");

                        var elementoSelect = $('select[name=departureAerodrome]').children("option:selected").html();
                        var iata = elementoSelect.split('- ')[1];
                        coordenadaDep = "DEP/" + iata + elementoSelect.split('- ')[2];

                        textareaArray.push(coordenadaDep);
                        ordered = orderLetters(textareaArray);

                        string = "";
                        ordered.map((obj) => {
                            string += obj.realText + " ";
                        });

                        $('textarea[name=otherInformation]').val(
                            string
                        );
                    } else {
                        console.log(coordenadaDep);
                        if (coordenadaDep !== null) {
                            $('textarea[name=otherInformation]').val(
                                deleteFromString(
                                    $('textarea[name=otherInformation]').val(),
                                    coordenadaDep
                                )
                            );
                        } else {
                            $('textarea[name=otherInformation]').val(textareaRecorded);
                        }

                    }
                })
            }
        });
    } else {
        //algo para que haga
    }
}

function autocompletarDestination() {
    var minimo_letras = 3; // minimo letras visibles en el autocompletar
    var palabra = $('#destinationAerodromeDiv .bs-searchbox input').val();
    //Contamos el valor del input mediante una condicional
    if (palabra.length >= minimo_letras) {
        $.ajax({
            url: 'mostrarAerodromos.php',
            type: 'POST',
            data: {palabra: palabra},
            success: function (data) {
                $('#destinationAerodrome').html(data);
                $('#destinationAerodrome').selectpicker('refresh');

                $('.inner.show ul li a').click(function () {
                    textareaRecorded = ($('textarea[name=otherInformation]').val());
                    if ($("#destinationAerodrome").val() == "ZZZZ") {
                        var textarea = ($('textarea[name=otherInformation]').val());
                        textareaArray = textarea.split(" ");

                        var elementoSelect = $('select[name=destinationAerodrome]').children("option:selected").html();
                        var iata = elementoSelect.split('- ')[1];
                        coordenadaDest = "DEST/" + iata + elementoSelect.split('- ')[2];

                        textareaArray.push(coordenadaDest);
                        ordered = orderLetters(textareaArray);

                        string = "";
                        ordered.map((obj) => {
                            string += obj.realText + " ";
                        });

                        $('textarea[name=otherInformation]').val(
                            string
                        );
                    } else {
                        console.log(coordenadaDest);
                        if (coordenadaDest !== null) {
                            $('textarea[name=otherInformation]').val(
                                deleteFromString(
                                    $('textarea[name=otherInformation]').val(),
                                    coordenadaDest
                                )
                            );
                        } else {
                            $('textarea[name=otherInformation]').val(textareaRecorded);
                        }

                    }
                })
            }
        });
    } else {
        //algo para que haga
    }
}

function autocompletarAltn() {
    var minimo_letras = 3; // minimo letras visibles en el autocompletar
    var palabra = $('#altnAerodromeDiv .bs-searchbox input').val();
    //Contamos el valor del input mediante una condicional
    if (palabra.length >= minimo_letras) {
        $.ajax({
            url: 'mostrarAerodromos.php',
            type: 'POST',
            data: {palabra: palabra},
            success: function (data) {
                $('#altnAerodrome').html(data);
                $('#altnAerodrome').selectpicker('refresh');

                $('.inner.show ul li a').click(function () {
                    textareaRecorded = ($('textarea[name=otherInformation]').val());
                    if ($("#altnAerodrome").val() == "ZZZZ") {
                        var textarea = ($('textarea[name=otherInformation]').val());
                        textareaArray = textarea.split(" ");

                        var elementoSelect = $('select[name=altnAerodrome]').children("option:selected").html();
                        var iata = elementoSelect.split('- ')[1];
                        coordenadaAltn = "ALTN/" + iata + elementoSelect.split('- ')[2];

                        textareaArray.push(coordenadaAltn);
                        ordered = orderLetters(textareaArray);

                        string = "";
                        ordered.map((obj) => {
                            string += obj.realText + " ";
                        });

                        $('textarea[name=otherInformation]').val(
                            string
                        );
                    } else {
                        console.log(coordenadaDest);
                        if (coordenadaAltn !== null) {
                            $('textarea[name=otherInformation]').val(
                                deleteFromString(
                                    $('textarea[name=otherInformation]').val(),
                                    coordenadaAltn
                                )
                            );
                        } else {
                            $('textarea[name=otherInformation]').val(textareaRecorded);
                        }

                    }
                })
            }
        });
    } else {
        //algo para que haga
    }
}

function autocompletarAltn2() {
    var minimo_letras = 3; // minimo letras visibles en el autocompletar
    var palabra = $('#altnAerodrome2Div .bs-searchbox input').val();
    //Contamos el valor del input mediante una condicional
    if (palabra.length >= minimo_letras) {
        $.ajax({
            url: 'mostrarAerodromos.php',
            type: 'POST',
            data: {palabra: palabra},
            success: function (data) {
                $('#altnAerodrome2').html(data);
                $('#altnAerodrome2').selectpicker('refresh');

                $('.inner.show ul li a').click(function () {
                    textareaRecorded = ($('textarea[name=otherInformation]').val());
                    if ($("#altnAerodrome2").val() == "ZZZZ") {
                        var textarea = ($('textarea[name=otherInformation]').val());
                        textareaArray = textarea.split(" ");

                        var elementoSelect = $('select[name=altnAerodrome2]').children("option:selected").html();
                        var iata = elementoSelect.split('- ')[1];
                        coordenadaAltn2 = "ALTN2/" + iata + elementoSelect.split('- ')[2];

                        textareaArray.push(coordenadaAltn2);
                        ordered = orderLetters(textareaArray);

                        string = "";
                        ordered.map((obj) => {
                            string += obj.realText + " ";
                        });

                        $('textarea[name=otherInformation]').val(
                            string
                        );
                    } else {
                        console.log(coordenadaAltn2);
                        if (coordenadaAltn2 !== null) {
                            $('textarea[name=otherInformation]').val(
                                deleteFromString(
                                    $('textarea[name=otherInformation]').val(),
                                    coordenadaAltn2
                                )
                            );
                        } else {
                            $('textarea[name=otherInformation]').val(textareaRecorded);
                        }

                    }
                })
            }
        });
    } else {
        //algo para que haga
    }
}

function orderLetters(array) {
    indicator =
        ["STS", "PBN", "NAV", "COM", "DAT", "SUR", "DEP", "DEST", "DOF", "REG", "EET", "SEL", "TYP", "CODE", "DLE", "OPR", "ORGN", "PER", "ALTN", "ALTN2", "RALT", "TALT", "RIF", "RMK"];

    formatText = [];
    finalArray = [];
    newArray = [];

    for (var i = 0; i < array.length; i++) {

        index = array[i].indexOf("/");

        if (index === -1) {
            newArray.push(newArray[newArray.length - 1] + " " + array[i]);
            newArray.splice(newArray.length - 2, 1);
        } else {
            formatText.push(array[i].slice(0, index));
            newArray.push(array[i]);
        }
    }

    formatText = formatText.filter(function (item, pos, self) {

        bool = self.indexOf(item) == pos;

        if (!bool) {
            newArray.map(function (string, position) {
                if (string.indexOf(item) === 0 && !flag) {
                    newArray[position] = newArray[newArray.length - 1];
                    newArray.splice(newArray.length - 1, 1);
                    flag = true;
                }
            }, flag = false);
        }

        return bool;
    });


    for (var i = 0; i < newArray.length; i++) {

        if (newArray[i] !== undefined) {
            finalArray.push(
                {
                    indicator: formatText[i],
                    position: indicator.indexOf(formatText[i]),
                    realText: newArray[i].trim()
                }
            );
        }
    }

    return finalArray.sort((a, b) => (a.position > b.position) ? 1 : -1);
}

$(document).ready(function () {


});


$.validator.addMethod(
    "regex",
    function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Please check your input."
);

$(document).ready(function () {

    // Comprobar los checkbox seleccionados
    $('#botonPbn').on('click', function() {

        var diasSeleccionados = new Array();

        $('input[type=checkbox]:checked').each(function() {
            diasSeleccionados.push($(this).val());
        });

        var dias = diasSeleccionados.toString();
        dias = dias.replaceAll(",","");
        dias = dias.replaceAll("on","");

        var otrosDatos = ($('textarea[name=otherInformation]').val());
        $('textarea[name=otherInformation]').val("PBN/" + dias + " " + otrosDatos);

    });

    var variableTripulacion = 1;
    $("#addTripulacion").click(function () {

        if (variableTripulacion < 7) {
            var nuevaTripulacion = '<label>0' + variableTripulacion + ' TRIPULACIÓN</label><div class="form-row">\n' +
                '                        <div class="form-group col-md-4">\n' +
                '                            <input type="text" class="form-control" id="apellidoNombreTripulacion' + variableTripulacion + '" placeholder="APELLIDO Y NOMBRE" name="apellidoNombreTripulacion' + variableTripulacion + '" maxlength="19">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-4">\n' +
                '                            <input type="text" class="form-control" id="funcionTripulacion' + variableTripulacion + '" placeholder="FUNCIÓN" name="funcionTripulacion' + variableTripulacion + '" maxlength="8">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-4">\n' +
                '                            <input type="text" class="form-control" id="nacionalidadTripulacion' + variableTripulacion + '" placeholder="NACIONALIDAD" name="nacionalidadTripulacion' + variableTripulacion + '" maxlength="12">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="form-row">\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="tel" class="form-control" id="dniTripulacion' + variableTripulacion + '" placeholder="PASAPORTE / DNI" name="dniTripulacion' + variableTripulacion + '">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="tel" class="form-control" id="licenciaTripulacion' + variableTripulacion + '" placeholder="LICENCIA Nº" name="licenciaTripulacion' + variableTripulacion + '">\n' +
                '                        </div>\n' +
                '                    </div>';
            $('#agregarTripulacion').append(nuevaTripulacion);
            ++variableTripulacion;
        }
    });

    var variableTierra = 1;
    $("#addTierra").click(function () {

        if (variableTierra < 4) {
            var nuevaTierra = '<label>0' + variableTierra + ' PERSONAL EN TIERRA</label><div class="form-row">\n' +
                '                        <div class="form-group col-md-4">\n' +
                '                            <input type="text" class="form-control" id="apellidoNombreTierra' + variableTierra + '" placeholder="APELLIDO Y NOMBRE" name="apellidoNombreTierra' + variableTierra + '" maxlength="20">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-4">\n' +
                '                            <input type="text" class="form-control" id="funcionTierra' + variableTierra + '" placeholder="FUNCIÓN" name="funcionTierra' + variableTierra + '" maxlength="8">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-4">\n' +
                '                            <input type="text" class="form-control" id="nacionalidadTierra' + variableTierra + '" placeholder="NACIONALIDAD" name="nacionalidadTierra' + variableTierra + '" maxlength="12">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="form-row">\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="tel" class="form-control" id="dniTierra' + variableTierra + '" placeholder="PASAPORTE / DNI" name="dniTierra' + variableTierra + '">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="tel" class="form-control" id="licenciaTierra' + variableTierra + '" placeholder="PPSA Nº" name="licenciaTierra' + variableTierra + '">\n' +
                '                        </div>\n' +
                '                    </div>';
            $('#agregarTierra').append(nuevaTierra);
            ++variableTierra;
        }
    });

    var variablePersona = 1;
    $("#addPersona").click(function () {

        if (variablePersona < 11) {
            var nuevaPersona = '<label>0' + variablePersona + ' PASAJERO</label><div class="form-row">\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="text" class="form-control" id="apellidoNombrePasajero' + variablePersona + '" placeholder="APELLIDO Y NOMBRE" name="apellidoNombrePasajero' + variablePersona + '" maxlength="30">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="text" class="form-control" id="nacionalidadPasajero' + variablePersona + '" placeholder="NACIONALIDAD" name="nacionalidadPasajero' + variablePersona + '" maxlength="20">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="form-row">\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="tel" class="form-control" id="dniPasajero' + variablePersona + '" placeholder="PASAPORTE / DNI" name="dniPasajero' + variablePersona + '">\n' +
                '                        </div>\n' +
                '                        <div class="form-group col-md-6">\n' +
                '                            <input type="text" class="form-control" id="licenciaPasajero' + variablePersona + '" placeholder="EQUIPAJES" name="licenciaPasajero' + variablePersona + '">\n' +
                '                        </div>\n' +
                '                    </div>';
            $('#agregarPersona').append(nuevaPersona);
            ++variablePersona;
        }
    });

    $("select[name=departureAerodrome]").change(function () {
        textareaRecorded = ($('textarea[name=otherInformation]').val());
        if ($("#departureAerodrome").val() == "ZZZZ") {
            var textarea = ($('textarea[name=otherInformation]').val());
            textareaArray = textarea.split(" ");
            var elementoSelect = $('select[name=departureAerodrome]').children("option:selected").html();
            var iata = elementoSelect.split('- ')[1];
            coordenadaDep = "DEP/" + iata + elementoSelect.split('- ')[2];
            textareaArray.push(coordenadaDep);
            ordered = orderLetters(textareaArray);
            string = "";
            ordered.map((obj) => {
                string += obj.realText + " ";
            });

            $('textarea[name=otherInformation]').val(
                string
            );
        } else {
            $('textarea[name=otherInformation]').val(textareaRecorded)
        }
    });


    $("select[name=destinationAerodrome]").change(function () {
        textareaRecorded = ($('textarea[name=otherInformation]').val());
        if ($("#destinationAerodrome").val() == "ZZZZ") {
            var textarea = ($('textarea[name=otherInformation]').val());
            textareaArray = textarea.split(" ");
            var elementoSelect = $('select[name=destinationAerodrome]').children("option:selected").html();
            var iata = elementoSelect.split('- ')[1];
            coordenadaDest = "DEST/" + iata + elementoSelect.split('- ')[2];
            textareaArray.push(coordenadaDest);
            ordered = orderLetters(textareaArray);
            string = "";
            ordered.map((obj) => {
                string += obj.realText + " ";
            });

            $('textarea[name=otherInformation]').val(
                string
            );
        } else {
            $('textarea[name=otherInformation]').val(textareaRecorded)
        }
    });

    $("select[name=altnAerodrome]").change(function () {
        textareaRecorded = ($('textarea[name=otherInformation]').val());
        if ($("#altnAerodrome").val() == "ZZZZ") {
            var textarea = ($('textarea[name=otherInformation]').val());
            textareaArray = textarea.split(" ");
            var elementoSelect = $('select[name=altnAerodrome]').children("option:selected").html();
            var iata = elementoSelect.split('- ')[1];
            coordenadaAltn = "ALTN/" + iata + elementoSelect.split('- ')[2];
            textareaArray.push(coordenadaAltn);
            ordered = orderLetters(textareaArray);
            string = "";
            ordered.map((obj) => {
                string += obj.realText + " ";
            });

            $('textarea[name=otherInformation]').val(
                string
            );
        } else {
            $('textarea[name=otherInformation]').val(textareaRecorded)
        }
    });


    $("select[name=altnAerodrome2]").change(function () {
        textareaRecorded = ($('textarea[name=otherInformation]').val());
        if ($("#altnAerodrome2").val() == "ZZZZ") {
            var textarea = ($('textarea[name=otherInformation]').val());
            textareaArray = textarea.split(" ");
            var elementoSelect = $('select[name=altnAerodrome2]').children("option:selected").html();
            var iata = elementoSelect.split('- ')[1];
            coordenadaAltn2 = "ALTN2/" + iata + elementoSelect.split('- ')[2];
            textareaArray.push(coordenadaAltn2);
            ordered = orderLetters(textareaArray);
            string = "";
            ordered.map((obj) => {
                string += obj.realText + " ";
            });

            $('textarea[name=otherInformation]').val(
                string
            );
        } else {
            $('textarea[name=otherInformation]').val(textareaRecorded)
        }
    });

    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    $("#signupForm").validate({
        rules:
            {
                aircraftIdentification: {required: true, maxlength: 7, regex: "^[A-Za-z][A-Za-z0-9]*$"},
                equipmentA: {
                    required: true,
                    maxlength: 65,
                    regex: "^(A|B|C|D|E1|E2|E3|F|G|H|I|J1|J2|J3|J4|J5|J6|J7|K|L|M1|M2|M3|N|O|P1|P2|P3|P4|P5|P6|P7|P8|P9|R|S|T|U|V|W|X|Y|Z|a|b|c|d|e1|e2|e3|f|g|h|i|j1|j2|j3|j4|j5|j6|j7|k|l|m1|m2|m3|n|o|p1|p2|p3|p4|p5|p6|p7|p8|p9|r|s|t|u|v|w|x|y|z)*$"
                },
                equipmentB: {
                    required: true,
                    maxlength: 25,
                    regex: "^(A|C|E|H|I|L|N|P|S|X|B1|B2|U1|U2|V1|V2|D1|G1|a|c|e|h|i|l|n|p|s|x|b1|b2|u1|u2|v1|v2|d1|g1)*$"
                },
                flightRules: {required: true, regex: "^[A-Za-z]*$"},
                typeOfFlight: {required: true, regex: "^[A-Za-z]*$"},
                number: {min: 1, maxlength: 2},
                typeOfAircraft: {required: true, maxlength: 4},
                wakeTurbulenceCat: {required: true, maxlength: 1, regex: "^[A-Za-z]*$"},
                departureAerodrome: {required: true, maxlength: 4, regex: "^[A-Za-z]*$"},
                time: {required: true, maxlength: 4, regex: "^([0-1][0-9]|2[0-3])([0-5][0-9])$"},
                cruisingSpeed: {required: true, maxlength: 5, regex: "^[KNMknm]0[0-9]{1,3}$"},
                level: {required: true, maxlength: 4, regex: "^[FAMfam][0-9]{1,3}|VFR$"},
                route: {required: true, maxlength: 300},
                destinationAerodrome: {required: true, maxlength: 4, regex: "^[A-Za-z]*$"},
                totalEet: {required: true, maxlength: 4, regex: "^([0-1][0-9]|2[0-3])([0-5][0-9])$"},
                altnAerodrome: {required: true, maxlength: 4, regex: "^[A-Za-z]*$"},
                altnAerodrome2: {maxlength: 4, regex: "^[A-Za-z]*$"},
                otherInformation: {required: true, maxlength: 600},
                endurance: {required: true, maxlength: 4, regex: "^([0-1][0-9]|2[0-3])([0-5][0-9])$"},
                personOnBoard: {required: true, maxlength: 3},
                dinghiesNumber: {min: 1, maxlength: 2},
                dinghiesCapacity: {min: 1, maxlength: 3},
                coverColour: {maxlength: 200},
                aircraftColourAndMarkings: {maxlength: 200},
                remarks: {maxlength: 200},
                pilotInCommand: {required: true, maxlength: 200},
            },
        messages:
            {
                aircraftIdentification: {regex: "Only letters and numbers (no spaces)."},
                equipmentA: {regex: "A.B.C.D.E1-E3.F.G.H.I.J1-J7.K.L.M1-M3.N.O.P1-P9.R.S.T.U.V.W.X.Y.Z (no spaces)."},
                equipmentB: {
                    regex:
                        "A.C.E.H.I.L.P.S.X.B1.B2.U1.U2.V1.V2.D1.G1 (no spaces)."
                },
                time: {regex: "Time format: HHMM"},
                totalEet: {regex: "Time format: HHMM"},
                endurance: {regex: "Time format: HHMM"},


            },

        // specify error placement
        errorPlacement: function (error, element) {
            if (element.attr("class").indexOf("selectpicker") != -1) {
                // $(".dropdown-toggle").text(error);
                var mpar = $(element).closest("div.bootstrap-select");
                error.insertAfter($('.dropdown-toggle', mpar));
            } else {
                error.insertAfter(element);
            }
        }


    });


    $("#formExtension").validate({
        rules:
            {
                opcionCorresponda: {required: true},
                presentadoPor: {required: true},
                adDestino: {required: true},
                adAlternativa: {required: true},
                adAlternativa2: {},
                matricula: {required: true, maxlength: 7, regex: "^[A-Za-z][A-Za-z0-9]*$"},
                tipoAeronave: {required: true, maxlength: 4},
                fechaInicio: {required: true},
                horarioFechaInicio: {required: true, maxlength: 4, regex: "^([0-1][0-9]|2[0-3])([0-5][0-9])$"},
                fechaFinalizacion: {required: true},
                horariofechaFinalizacion: {required: true, maxlength: 4, regex: "^([0-1][0-9]|2[0-3])([0-5][0-9])$"},
                tipoVuelo: {},
                otrosTipoVuelo: {},
                observaciones: {},
                catSei: {},
                dniLegajoLicencia: {required: true, maxlength: 15},
                telefonoContacto: {required: true, maxlength: 15},
                emailContacto: {required: true},
                aclaracion: {required: true},
            },
        messages:
            {
                matricula: {regex: "Only letters and numbers (no spaces)."},
                horarioFechaInicio: {regex: "Time format: HHMM"},
                horariofechaFinalizacion: {regex: "Time format: HHMM"},
            },

    });


    $("select[name=selectEmailAroAis]").change(function () {
        var elementoSelect = $('select[name=selectEmailAroAis]').children("option:selected").html();

        // Crea un campo de texto "oculto"
        var aux = document.createElement("input");

        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", elementoSelect);

        // Añade el campo a la página
        document.body.appendChild(aux);

        // Selecciona el contenido del campo
        aux.select();

        // Copia el texto seleccionado
        document.execCommand("copy");

        // Elimina el campo de la página
        document.body.removeChild(aux);

        alert("El email " + elementoSelect + " ha sido copiado al portapapeles!");
    })

    $("select[name=selectEmailJefeAerodromo]").change(function () {
        var elementoSelect = $('select[name=selectEmailJefeAerodromo]').children("option:selected").html();

        // Crea un campo de texto "oculto"
        var aux = document.createElement("input");

        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", elementoSelect);

        // Añade el campo a la página
        document.body.appendChild(aux);

        // Selecciona el contenido del campo
        aux.select();

        // Copia el texto seleccionado
        document.execCommand("copy");

        // Elimina el campo de la página
        document.body.removeChild(aux);

        alert("El email " + elementoSelect + " ha sido copiado al portapapeles!");
    })


    $("#aeroplanta").change(function () {
        console.log($("#aeroplanta").val());
        $.ajax({
            type: "POST",
            url: "traerPropiedadesAeroplanta.php",
            data: {"propiedadesAeroplanta": $("#aeroplanta").val()},
            success: function (response) {
                $("#camionYpf").fadeOut();
                $("#propiedadesAeroplanta").html(response);
            }
        });
        return false;
    });

    $("#aircraftIdentificationUser").change(function () {
        $.ajax({
            type: "POST",
            url: "traerPropiedadesMatriculasUser.php",
            data: {"propiedadesMatriculas": $("#aircraftIdentificationUser").val()},
            success: function (response) {
                var otrosDatos = textareaRecorded = ($('textarea[name=otherInformation]').val());
                var myObj = JSON.parse(response);
                $("#equipmentA").val(myObj.equipamientoA);
                $("#equipmentB").val(myObj.equipamientoB);
                $("#typeOfAircraft").val(myObj.tipoAcft);
                $("#wakeTurbulenceCat").val(myObj.estelaTurbulenta);
                $("#otherInformation").val(otrosDatos + myObj.otherInformation);

                if (myObj.switch1UHF == 1) {
                    $("#switch1").prop('checked', true);
                } else {
                    $("#switch1").prop('checked', false);
                }
                if (myObj.switch2VHF == 1) {
                    $("#switch2").prop('checked', true);
                } else {
                    $("#switch2").prop('checked', false);
                }
                if (myObj.switch3ELT == 1) {
                    $("#switch3").prop('checked', true);
                } else {
                    $("#switch3").prop('checked', false);
                }

                if (myObj.survivalEquipment == 1) {
                    $("#survivalEquipment").prop('checked', true);
                } else {
                    $("#survivalEquipment").prop('checked', false);
                }
                if (myObj.switch4Polar == 1) {
                    $("#switch4").prop('checked', true);
                } else {
                    $("#switch4").prop('checked', false);
                }
                if (myObj.switch5Desert == 1) {
                    $("#switch5").prop('checked', true);
                } else {
                    $("#switch5").prop('checked', false);
                }
                if (myObj.switch6Maritime == 1) {
                    $("#switch6").prop('checked', true);
                } else {
                    $("#switch6").prop('checked', false);
                }
                if (myObj.switch7Jungle == 1) {
                    $("#switch7").prop('checked', true);
                } else {
                    $("#switch7").prop('checked', false);
                }


                if (myObj.jackets == 1) {
                    $("#jackets").prop('checked', true);
                } else {
                    $("#jackets").prop('checked', false);
                }
                if (myObj.switch8jacketsLight == 1) {
                    $("#switch8").prop('checked', true);
                } else {
                    $("#switch8").prop('checked', false);
                }
                if (myObj.switch9jacketsFluores == 1) {
                    $("#switch9").prop('checked', true);
                } else {
                    $("#switch9").prop('checked', false);
                }
                if (myObj.switch10jacketsUHF == 1) {
                    $("#switch10").prop('checked', true);
                } else {
                    $("#switch10").prop('checked', false);
                }
                if (myObj.switch11jacketsVHF == 1) {
                    $("#switch11").prop('checked', true);
                } else {
                    $("#switch11").prop('checked', false);
                }

                if (myObj.dinghiesCheck == 1) {
                    $("#dinghies").prop('checked', true);
                } else {
                    $("#dinghies").prop('checked', false);
                }
                $("#dinghiesNumber").val(myObj.dinghiesNumber);
                $("#dinghiesCapacity").val(myObj.dinghiesCapacity);
                $("#coverColour").val(myObj.coverColour);

                $("#aircraftColourAndMarkings").val(myObj.colorAeronave);
                $("#pilotInCommand").val(myObj.pilot_in_command);
            }
        });
        return false;
    });

});

function mayus(e) {
    e.value = e.value.toUpperCase();
};

function ocultarDinghies(obj) {
    if (obj.checked) {
        document.getElementById('dinghiesNumber').style.display = "";
        document.getElementById('dinghiesCapacity').style.display = "";
        document.getElementById('coverColour').style.display = "";
    } else {
        document.getElementById('dinghiesNumber').style.display = "none";
        document.getElementById('dinghiesCapacity').style.display = "none";
        document.getElementById('coverColour').style.display = "none";
    }
}

function comprobar2(obj) {
    if (obj.checked) {
        document.getElementById('survivalEquipmentDiv').style.display = "";
    } else {

        document.getElementById('survivalEquipmentDiv').style.display = "none";
    }
}

function comprobar3(obj) {
    if (obj.checked) {
        document.getElementById('jacketsDiv').style.display = "";
    } else {

        document.getElementById('jacketsDiv').style.display = "none";
    }
}

function ocultar() {
    var valor = document.getElementById('toTopFpl').style.display;
    if (valor == "none") {
        $("#toTopFpl").fadeIn();
        $("#toTopFpl").fadeIn("slow");
        $("#toTopFpl").fadeIn(1000);

        $("#toTopFdg").fadeIn();
        $("#toTopFdg").fadeIn("slow");
        $("#toTopFdg").fadeIn(2000);

        $("#toTopExt").fadeIn();
        $("#toTopExt").fadeIn("slow");
        $("#toTopExt").fadeIn(3000);

        document.getElementById('toTopFpl').style.display = "block";
        document.getElementById('toTopFdg').style.display = "block";
        document.getElementById('toTopExt').style.display = "block";
    } else if (valor == "block") {
        var tiempo = 2000;
        $("#toTopFpl").fadeOut();
        $("#toTopFpl").fadeOut("slow");
        $("#toTopFpl").fadeOut(tiempo);

        $("#toTopFdg").fadeOut();
        $("#toTopFdg").fadeOut("slow");
        $("#toTopFdg").fadeOut(tiempo);

        $("#toTopExt").fadeOut();
        $("#toTopExt").fadeOut("slow");
        $("#toTopExt").fadeOut(tiempo);
    }
}

function per(letra) {
    var otrosDatos = ($('textarea[name=otherInformation]').val());
    $('textarea[name=otherInformation]').val("PER/" + letra + " " + otrosDatos);
    $('#myModalPer').modal('hide');
}

function sts(letra) {
    var otrosDatos = ($('textarea[name=otherInformation]').val());
    $('textarea[name=otherInformation]').val("STS/" + letra + " " + otrosDatos);
    $('#myModalSts').modal('hide');
}