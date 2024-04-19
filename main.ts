import { data } from './data.js';
import { Concierto } from './concierto.js';

let conciertosTable: HTMLElement = document.getElementById("conciertos")!;
let detallesDiv: HTMLElement = document.getElementById("detalles-concierto")!;

mostrarDatosConciertos(data);

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
        row.appendChild(document.createElement("td")).innerText = concierto.getSetList1().join(", "); // Suponiendo que getSetList1 devuelve un array de strings
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
