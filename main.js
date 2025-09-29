import { formulario } from "./componentes/formulario/formulario.js";
import { tarea } from "./componentes/Tarea/tarea.js";
import { tareas } from "./componentes/tareas/tareas.js";

function lista() {
   let paginaLista = document.createElement("div");
    paginaLista.className = "pagina-lista";
    paginaLista.id = "root";

    paginaLista.appendChild(tareas());

    return paginaLista;
}

document.body.appendChild(lista());
