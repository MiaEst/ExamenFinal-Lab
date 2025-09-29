import { formulario } from "../formulario/formulario.js";
export function tareas() {
    let section = document.createElement("section");
    section.className = "section";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Agrega una tarea nueva";

    let btnAgregar = document.createElement("button");
    btnAgregar.textContent = "Agregar";

    let lista = document.createElement("ul");
    lista.className = "lista-tareas";

    btnAgregar.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();
    
    if (nombre) {
        let item = document.createElement("li");
            item.textContent = `${nombre}`;

            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "X";
            btnEliminar.className = "btn-eliminar";

            btnEliminar.addEventListener("click", () => {
                item.remove();
                let tareass = JSON.parse(localStorage.getItem("tareass")) || [];
                tareass = tareass.filter(p => !(p.nombre === nombre));
                localStorage.setItem("tareass", JSON.stringify(tareass));
            });

            item.appendChild(btnEliminar);
            lista.appendChild(item);

            let tareass = JSON.parse(localStorage.getItem("tareass")) || [];
            tareass.push({ nombre});
            localStorage.setItem("tareass", JSON.stringify(tareass));

            inputNombre.value = "";
        }
    });
    
    let tareasAgregadas = JSON.parse(localStorage.getItem("tareass")) || [];
    tareasAgregadas.forEach(p => {
        let item = document.createElement("li");
        item.textContent = `${p.nombre}`;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.className = "btn-eliminar";

        btnEliminar.addEventListener("click", () => {
            item.remove();
            let tareass = JSON.parse(localStorage.getItem("tareass")) || [];
            tareass = tareass.filter(prod => !(prod.nombre === p.nombre));
            localStorage.setItem("tareass", JSON.stringify(tareass));
        });

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
section.appendChild(inputNombre);
section.appendChild(btnAgregar);
section.appendChild(lista);


return section; 
}
