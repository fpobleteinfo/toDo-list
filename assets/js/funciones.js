const tareas = [
  { id: 1, descripcion: "Sacar la basura", estado: false },
  { id: 2, descripcion: "Comprar comida", estado: false },
  { id: 3, descripcion: "Hacer aseo", estado: false },
];


function muestraTareas() {
  const total = document.getElementById("total-tareas");
  const completadas = document.getElementById("total-completadas");
  const tablaContainer = document.getElementById("tareas");

  let tablaHTML = ``;
  for (const tarea of tareas) {
    tablaHTML += `
  <tr>
  <td>${tarea.id}</td>
  <td>${tarea.estado ? `<s>${tarea.descripcion}</s>` : `${tarea.descripcion}` }</td>
  <td align="center"><input type="checkbox" ${
    tarea.estado ? "checked" : ""
  } onclick="cambiarEstado(${tarea.id})"></td>
  <td align="center" style="color: red;"><i class="fa-solid fa-circle-minus" onclick="eliminarTarea(${tarea.id})"></i></td>
  </tr>`;
  }

  tablaHTML += ``;

  const tareasCompletadas= tareas.filter((tarea) =>{
  return tarea.estado;
  });

  tablaContainer.innerHTML = tablaHTML;
  total.textContent = `${tareas.length}`;
  completadas.textContent=tareasCompletadas.length
}

muestraTareas();

function agregarTarea() {
  const nuevaTarea = document.getElementById("inputTarea").value;
  const maxId = Math.max(...tareas.map((tarea) => tarea.id));
  const nuevaId = maxId >= 0 ? maxId + 1 : 1;

  tareas.push({ id: nuevaId, descripcion: nuevaTarea, estado: false });


  let tablaHTML = ``;
  for (const tarea of tareas) {
    tablaHTML += `
  <tr>
  <td>${tarea.id}</td>
  <td>${tarea.descripcion}</td>
  <td align="center"><input type="checkbox" ${
    tarea.estado ? "checked" : ""
  } onclick="cambiarEstado(${tarea.id})"></td>
  <td align="center" style="color: red;"><i class="fa-solid fa-circle-minus"></i></td>
  </tr>`;
  }

  tablaHTML += ``;

  muestraTareas();
}

function cambiarEstado(id) {
  //identifico que el id pasado sea igual al id de la tarea...
  const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
  // console.log(tareaIndex)
  const tarea = tareas[tareaIndex];
  const otraTarea = {...tarea, estado: !tarea.estado}
  
  tareas.splice(tareaIndex,1,otraTarea)
  muestraTareas();

}

function eliminarTarea(id) {
  
  const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
  if (tareaIndex !== -1) {
    tareas.splice(tareaIndex, 1);
    muestraTareas();
  }
}