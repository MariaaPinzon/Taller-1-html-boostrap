import { data } from './data.js';
import { Concierto } from './concierto.js';

let conciertosTable: HTMLElement = document.getElementById("conciertos")!;
let detallesDiv: HTMLElement = document.getElementById("detalles-concierto")!;

let divAverage : HTMLElement = document.getElementById("average")!;


mostrarDatosConciertos(data);
mostrarAverage(data);

function mostrarDatosConciertos(conciertos: Concierto[]): void {
    for (let concierto of conciertos) {
        let row = document.createElement("tr");
        let tituloCell = document.createElement("td");
        let link = document.createElement("a");
        link.textContent = concierto.getTitulo();
        link.classList.add("concierto-link");
        link.addEventListener("click", function() { mostrarDetallesConcierto(concierto); });
        tituloCell.appendChild(link);
        
        row.appendChild(document.createElement("td")).innerHTML = `<b>${concierto.getID()}</b>`;
        row.appendChild(tituloCell);
        row.appendChild(document.createElement("td")).innerText = concierto.getDescripcion();
        row.appendChild(document.createElement("td")).innerText = concierto.getSetList1().join(", ");
        conciertosTable.appendChild(row);
    }
}

function mostrarDetallesConcierto(concierto: Concierto): void {
    detallesDiv.innerHTML = `
        <div class="card" style="width: 100%;">
            <img src="${concierto.getImagenModa1()}" class="card-img-top" alt="Imagen de moda">
            <div class="card-body">
                <p class="card-text">${concierto.getTextoModa1()}</p>
            </div>
        </div>
    `;
}

function mostrarAverage(conciertos : Concierto[]){
    let average = 0;
    for(let concierto of conciertos){
        average += concierto.getVentas();
    }
    average = average/conciertos.length;
    let averageRounded = parseFloat(average.toFixed(2)); 
    divAverage.innerHTML = `<p><b>Promedio de Ventas: </b>${averageRounded}</p>`;}