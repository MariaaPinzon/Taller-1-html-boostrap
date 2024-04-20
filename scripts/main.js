import { data } from './data.js';
var conciertosTable = document.getElementById("conciertos");
var detallesDiv = document.getElementById("detalles-concierto");
var divAverage = document.getElementById("average");
mostrarDatosConciertos(data);
mostrarAverage(data);
function mostrarDatosConciertos(conciertos) {
    var _loop_1 = function (concierto) {
        var row = document.createElement("tr");
        var tituloCell = document.createElement("td");
        var link = document.createElement("a");
        link.textContent = concierto.getTitulo();
        link.classList.add("concierto-link");
        link.addEventListener("click", function () { mostrarDetallesConcierto(concierto); });
        tituloCell.appendChild(link);
        row.appendChild(document.createElement("td")).innerHTML = "<b>".concat(concierto.getID(), "</b>");
        row.appendChild(tituloCell);
        row.appendChild(document.createElement("td")).innerText = concierto.getDescripcion();
        row.appendChild(document.createElement("td")).innerText = concierto.getSetList1().join(", ");
        conciertosTable.appendChild(row);
    };
    for (var _i = 0, conciertos_1 = conciertos; _i < conciertos_1.length; _i++) {
        var concierto = conciertos_1[_i];
        _loop_1(concierto);
    }
}
function mostrarDetallesConcierto(concierto) {
    detallesDiv.innerHTML = "\n        <div class=\"card\" style=\"width: 100%;\">\n            <img src=\"".concat(concierto.getImagenModa1(), "\" class=\"card-img-top\" alt=\"Imagen de moda\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">").concat(concierto.getTextoModa1(), "</p>\n            </div>\n        </div>\n    ");
}
function mostrarAverage(conciertos) {
    var average = 0;
    for (var _i = 0, conciertos_2 = conciertos; _i < conciertos_2.length; _i++) {
        var concierto = conciertos_2[_i];
        average += concierto.getVentas();
    }
    average = average / conciertos.length;
    var averageRounded = parseFloat(average.toFixed(2));
    divAverage.innerHTML = "<p><b>Promedio de Ventas: </b>".concat(averageRounded, "</p>");
}
